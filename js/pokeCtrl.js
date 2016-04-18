angular.module('app')
	.controller('pokeCtrl', function($scope, pokeService){
	

	$scope.poke = function(num){
		pokeService.pokemon($scope.num).then(function(response){
			console.log(response.data);
			$scope.pokemon = response.data.name;
			//$scope.pokemonAbility = response.moves.move[0].name;
			$scope.pokemonImg = response.data.sprites.front_default;
			$scope.pokemonImgBack = response.data.sprites.back_default;
		});
	}; 

});