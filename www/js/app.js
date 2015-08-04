// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','ngCordovaOauth']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
app.controller("LoginController", function($scope, $cordovaOauth,  $location) {

    $scope.login = function() {
        $cordovaOauth.google("107612310908-lcu0ldc5i0e3gerjfmf8iag7cjck53oo.apps.googleusercontent.com", ["https://www.googleapis.com/auth/urlshortener"]).then(function(result) {
            //$localStorage.accessToken = result.access_token;
            alert(result.access_token);
            $location.path("/profile");
        }, function(error) {
            alert("There was a problem signing in!  See the console for logs");
            console.log(error);
        });
    };

});
