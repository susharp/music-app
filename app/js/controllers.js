'use strict';

/* Controllers */

/*angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);*/

var musicApp = angular.module('musicApp',[]);
musicApp.config(function($routeProvider){
$routeProvider
  .when("/",{
          templateUrl: "partials/musicList.html",
          controller: 'MusicController'
  })
  .when("/",{
          templateUrl: "partials/addTrack.html",
          controller: 'MusicController'
  })
  .otherwise({
          redirectTo: "/"
  })
});

musicApp.controller("HomeController",["$scope",function($scope){
$scope.appTitle = "Music Records";
}]);

  musicApp.controller("MusicController",["$scope",function($scope){
    $scope.TrackNames = [
    {completed:true, trackName: 'Cinema',Genre:'Dubstep', Artist:'Skrillex', DateOfRelease:'22-09-2014'},
    {completed:true, trackName: 'I hold still',Genre:'Dusbtep',Artist:'Jauz', DateOfRelease:'15-03-2017'},
    {completed:true, trackName: 'kashmir', Genre:'EDM',Artist:'KSHMR', DateOfRelease:'02-10-2015'},
    {completed:true, trackName: 'whistle', Genre:'pop',Artist:'FloRida', DateOfRelease:'10-10-2014'},
    {completed:true, trackName: 'Rap God', Genre:'Rap',Artist:'Eminem', DateOfRelease:'9-10-2015'},
    {completed:true, trackName: 'Let me love you', Genre:'chillstep',Artist:'DJ SNAKE', DateOfRelease:'23-11-16'},
    {completed:true, trackName: 'Rock on', Genre:'Bollywood',Artist:'Farhan Akhtar', DateOfRelease:'12-12-2012'}
    ]
  }]);