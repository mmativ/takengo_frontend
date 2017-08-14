app.controller('signUpController', ['$scope', '$rootScope', '$timeout', '$http', 'API_URL', function($scope, $rootScope, $timeout, $http, API_URL){
    
    $scope.signup_error = {
        email: false,
        password_confirmation: false,
        message: {
            email: [],
            password_confirmation: []
        }
    }

    $scope.reset_input = () => {
        $scope.signup_information = {
            email: '',
            password: '',
            password_confirmation: ''
        };
    }

    $scope.reset_input();

    $http.post(API_URL + 'token').then((data)=>{
        console.log(data)
    })

    $scope.signup = () => {
        const {email, password, password_confirmation} = $scope.signup_information;  
        if(password != password_confirmation){
            $scope.signup_error.password_confirmation = true;
            $scope.signup_error.message.password_confirmation = ['Password does not match'];
            return;
        }
        $rootScope.metadata.loading.sign_up = true;
        $rootScope.metadata.new_sign_up = true;
        $http.post(API_URL + 'register', {
            email: email,
            password: password,
            password_confirmation: password_confirmation
        }, {
            responseType: 'json'
        })
        .then((data)=>{
            console.log(data);            
            let response = data.data;
            if(response.status == 'OK'){
                $scope.reset_input();
                firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    $http.post(API_URL + 'register/error', {
                        email: email,
                        error_code: errorCode,
                        error_message: errorMessage
                    }, {
                        responseType: 'json'
                    })
                    .then((data) => {
                        //success deleting
                        console.log(data)
                        $rootScope.metadata.loading.sign_up = false;
                    }, (error) => {
                        //error deleting. What to do?
                        console.log(error)
                        $rootScope.metadata.loading.sign_up = false;
                    })
                });
            }else{
                $rootScope.metadata.loading.sign_up = false;
            }
        }, (data)=>{
            if(data.status == 422){
                let response = data.data;
                if(response.email){
                    $scope.signup_error.email = true;
                    $scope.signup_error.message.email = response.email;
                }
                if(response.password){
                    $scope.signup_error.password = true;
                    $scope.signup_error.message.password = response.password;
                }
                if(response.password_confirmation){
                    $scope.signup_error.password_confirmation = true;
                    $scope.signup_error.message.password_confirmation = response.password_confirmation;
                }
                $rootScope.metadata.loading.sign_up = false;
                $scope.digest();
            }
        });
        
    }
}])