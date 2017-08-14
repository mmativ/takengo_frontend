var app = angular.module('takeNGo', [])
// .constant('API_URL', 'http://api.takengo.io/api/')
.constant('API_URL', 'http://api.takengo.dev/api/')
.config(function ($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    //rest of route code
})
//.constant('API_URL', 'http://api.takengo.io/');

app.controller('mainController', ['$scope', '$timeout', '$http', '$rootScope', 'API_URL', function($scope, $timeout, $http, $rootScope, API_URL){
    $rootScope.metadata = {
        signed_in: false,
        new_sign_up: false,
        email_verified: false,
        fb_uid: '',
        tng_uid: '',
        email: '',
        loading: {
            sign_up: false
        }
    }
    
    $scope.digest = function(a) {
        var waitForRenderAndDoSomething = function() {
            if ($http.pendingRequests.length > 0) {
                $timeout(waitForRenderAndDoSomething); // Wait for all templates to be loaded
            } else {
                if (a) {
                    return a();
                }
            }
        };
        return $timeout(waitForRenderAndDoSomething);
    };

    $scope.modalFunc = {
        closeAuth: () => {
            $('#signup-form').modal('hide');
            $('#signin-form').modal('hide');
            $('#forget-password-form').modal('hide');
        }
    }

    firebase.auth().onAuthStateChanged(function(user) {
        $rootScope.metadata.loading.sign_up = false;
        if (user) {
            // User is signed in.
            $rootScope.metadata = Object.assign($rootScope.metadata, {
                signed_in: true,
                email: user.email,
                fb_uid: user.uid,
                email_verified: user.emailVerified
            })
            $scope.modalFunc.closeAuth();
            if($rootScope.metadata.new_sign_up){
                $rootScope.metadata.new_sign_up = false;
                $('#sign-up-success').modal('show');
            }
            $scope.register_uid();
            $scope.check_token();
            $scope.get_user_profile();
            $scope.digest();
        } else {
            // No user is signed in.
            console.log('no user signed in')
            $rootScope.metadata = Object.assign($rootScope.metadata, {
                signed_in: false,
                email_verified: false,
                fb_uid: '',
                email: ''
            })
            $http.post(API_URL + 'reset_auth').then((data) => {
                console.log(data);
            }, (err) => {
                
            })
            $scope.digest();
        }
    });

    $scope.check_token = () => {
        $http.post(API_URL + 'token').then(function(data){
            console.log('check_token');
            console.log(data);
            console.log('end of check_token');
        }, (err) => {
            console.log('check_token');
            console.log(err);
            console.log('end of check_token');
        })
    }
    $scope.get_user_profile = () => {
        $http.post(API_URL + 'get_profile').then((data) => {
            console.log('get_profile');
            console.log(data);
            console.log('end of get_profile');
        }, (err) => {
            console.log('get_profile');
            console.log(err);
            console.log('end of get_profile');
        })
    }

    $scope.register_uid = () => {
        $http.post(API_URL + 'register/uid',{
            fb_uid: $rootScope.metadata.fb_uid,
            email: $rootScope.metadata.email
        }).then((data) => {
            console.log('register_uid');
            console.log(data);
            console.log('end of register_uid');
        }, (err) => {
            console.log('register_uid');
            console.log(err);
            console.log('end of register_uid');
        })
    }

    firebase.auth().getRedirectResult().then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log('facebook logging');
        console.log(user);
        console.log('end of facebook logging');
        $http.post(API_URL + 'register/vendor', {
            email: user.email,
            fb_uid: user.uid
        }, {
            responseType: 'json'
        }).then((data) => {
            console.log(data)
            $scope.digest();
        }, (err) => {
            console.log(err);
            $scope.digest();
        })
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(errorMessage);
    });
}])