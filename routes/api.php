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
    Route::post('notice/read', 'NoticeController@read');
    Route::post('notice/readStatus', 'NoticeController@readStatus');
    Route::post('notice/getbyid', 'NoticeController@byid');


    //Users
    Route::post('users/get', 'AuthController@get');
    Route::post('users/delete', 'AuthController@delete');

    Route::get('{any}', function () {
        return 'Unortharized!';
    });
});