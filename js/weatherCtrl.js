angular.module('app')
	.controller('weatherCtrl', function($scope, weatherService){

		$scope.weatherApp = function(){
			weatherService.weather().then(function(response){
				console.log(response.data);
				$scope.weath = response.data;
			});
		};

		$scope.weatherApp();


	});