<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\InteresadosController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::controller(InteresadosController::class)->group(function(){
    Route::get('/interesados','index');
    Route::post('/interesado','store');
    Route::get('/interesado/{id}','show');
    Route::put('/interesado/{id}','update');
    Route::delete('/interesado/{id}','destroy');
});