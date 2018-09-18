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
    Route::post('notice/get', 'NoticeController@get');
    Route::post('notice/add', 'NoticeController@add');
    Route::post('notice/update', 'NoticeController@update');
    Route::post('notice/pause', 'NoticeController@pause');
    Route::post('notice/delete', 'NoticeController@delete');

    Route::get('{any}', function () {
        return 'Unortharized!';
    });

    //Route::get('login', 'AuthController@login');
});