angular.module('app')
	.service('weatherService', function($http, $q){


	

	// this.weather =	function (){

	// 	var defer = $q.defer();

	// 	function getLocation(){
	// 		navigator.geolocation.getCurrentPosition(showPosition);
	// 	}

	// 	function showPosition (position){
	// 		var lat = position.coords.latitude;
	// 		var lon = position.coords.longitude;
	// 	}.then(function(lat, lon){
	// 		return $http ({
	// 			method: 'GET',
	// 			url: 'https://simple-weather.p.mashape.com/weather?lat=' + lat + '&lng=' + lon,
	// 			headers: {'X-Mashape-Key' : 'okVB2o97X0mshJTlKLGBbyzO0yzJp1fRQ8QjsnOcZmgyl9Jpzr'}
	// 		});

	// 		deferred.resolve(lat,lon);
	// 	};
	// 	console.log(deferred.promise);
	// 	return deferred.promise;


	// };
		



		this.weather = function(){
			return $http ({
				method: 'GET',
				url: 'https://simple-weather.p.mashape.com/weather?lat=40.2338&lng=-111.6585',
				headers: {'X-Mashape-Key' : 'okVB2o97X0mshJTlKLGBbyzO0yzJp1fRQ8QjsnOcZmgyl9Jpzr'}
			});
		};

	});