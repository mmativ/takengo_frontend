<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

<<<<<<< HEAD
/*Links on Header*/
Route::get('/', function () {
    return view('home');
});
Route::get('/brands', function () {
    return view('car-brands');
});
Route::get('/collections', function () {
    return view('car-collections');
});
Route::get('/how-it-works', function () {
    return view('how-it-works');
});
Route::get('/contact-us', function () {
    return view('contact-us');
});
Route::get('/dashboard', 'ProfileController@dashboard');
Route::get('/profile', 'ProfileController@show');
Route::get('/profile/edit', 'ProfileController@edit');
Route::put('/profile/edit', 'ProfileController@update')->name('profile.submit');
=======
Route::group(['middleware' => 'web'], function () {
    /*Links on Header*/
    Route::get('/', function () {
        return view('home');
    });
    Route::get('/brands', function () {
        return view('car-brands');
    });
    Route::get('/collections', function () {
        return view('car-collections');
    });
    Route::get('/details', function () {
        return view('car-details');
    });
    Route::get('/how-it-works', function () {
        return view('how-it-works');
    });
    Route::get('/contact-us', function () {
        return view('contact-us');
    });
    Route::get('/dashboard', 'ProfileController@dashboard');
    Route::get('/profile', 'ProfileController@show');
    Route::get('/profile/edit', 'ProfileController@edit');
    Route::put('/profile/edit', 'ProfileController@update')->name('profile.submit');
>>>>>>> 8eb03d7ae4f21dd398409669413f7822747a4816

/*Links on footer*/
Route::get('/faq', function () {
    return view('faq');
});
Route::get('/terms-and-conditions', function () {
    return view('terms-and-conditions');
});
Route::get('/about-us', function () {
    return view('about-us');
});

Route::get('/cars/book/{cid}', 'BookingController@show');