<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Http;

Route::get('/login', function () {
  return inertia('Login');
});

Route::get('/{typeOfUser}', function ($typeOfUser) {
  if ($typeOfUser != 'managed' && $typeOfUser != 'personal') {
    return redirect('/login');
  } else {
    $userDataRes = Http::get('https://api.jsonbin.io/v3/b/66a878a5e41b4d34e4190c12');
    $userPersonalDataRes = Http::get('https://api.jsonbin.io/v3/b/66a878a5e41b4d34e4190c12');
    $careerGoalDataRes = Http::get('https://api.jsonbin.io/v3/b/66a87a3ae41b4d34e4190ccc');
    $documentsDataRes = Http::get('https://api.jsonbin.io/v3/b/66a87a90ad19ca34f88ecd65');
    $userData = $userDataRes->json()['record']['data'] ?? null;
    $userPersonalData = $userPersonalDataRes->json()['record']['data'] ?? null;
    $careerGoalData = $careerGoalDataRes->json()['record']['data'] ?? null;
    $documentsData = $documentsDataRes->json()['record']['data'] ?? null;

    return inertia('Home', [
      'userData' => $userData,
      'userPersonalData' => $userPersonalData,
      'careerGoalData' => $careerGoalData,
      'documentsData' => $documentsData,
      'typeOfUser' => $typeOfUser,
    ]);
  }
});