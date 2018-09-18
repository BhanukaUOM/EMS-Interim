<?php

Route::group([

    'middleware' => 'api'

], function () {

    //Auth
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('sendPasswordReset', 'PasswordResetController@sendEmail');
    Route::post('responsePasswordReset', 'PasswordResetController@reset');

    //Notice
    Route::get('getNotice', 'NoticeController@getNotice');

    Route::get('{any}', function () {
        return 'Unortharized!';
    });

    //Route::get('login', 'AuthController@login');
});