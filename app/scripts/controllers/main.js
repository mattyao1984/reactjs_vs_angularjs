'use strict';

/**
 * @ngdoc function
 * @name reactangularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reactangularJsApp
 */
angular.module('reactangularJsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.framework = 'ReactJS';
    $scope.data = {
    	react: [],
    	angular: []
    };

    $scope.clickHandler = function(){
      console.log("In AngularJS");
    }

    $scope.refresh = function(type){
	    for(var i = 0; i <= 1500; i++){
	    	$scope.data[type][i] = {};
	      for(var j = 0; j < 2; ++j) {
	        $scope.data[type][i][j] = Math.random();
	      }
	    }
	  };

	  $scope.refresh('react');
	  $scope.refresh('angular');
  });
