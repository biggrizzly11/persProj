angular.module('app')
	.service('pokeService', function($http){
  
  
	this.pokemon = function(num){
		return $http({
			method: 'GET',
			url: 'http://pokeapi.co/api/v2/pokemon/' + num + '/'
		});
	};
});