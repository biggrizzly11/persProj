angular.module('app')
	.controller('yodaCtrl', function($scope, yodaService){

		$scope.text = "";

		$scope.yoda = function(str){
			yodaService.yoda($scope.str).then(function(response){
				console.log(response.data);
				$scope.text = response.data;
			});
		};

	});