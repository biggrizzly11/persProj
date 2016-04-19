angular.module('app')
	.service('yodaService', function($http){

		this.yoda = function(str){
			return $http ({
				method: 'GET',
				url: 'https://yoda.p.mashape.com/yoda?sentence=' + str,
				headers: {'X-Mashape-Key' : 'GHPW2j6fxrmshRQPxRfLJ6KDupHap1wMlv4jsnDzravzC0ZaED'}
			});
		};

	});