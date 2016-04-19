angular.module('app', ['ui.router', 'ui.bootstrap'])
	.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home',{
				url: '/',
				controller: 'mainCtrl',
				templateUrl: 'home.html'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'about.html'
			})
			.state('projects', {
				url: '/projects',
				templateUrl: 'projects.html'
			})
			.state('pokemon', {
				url: '/pokemon',
				templateUrl: 'pokemon.html'
			})
			.state('yoda', {
				url: '/yoda',
				templateUrl: 'yoda.html'
			});


	});