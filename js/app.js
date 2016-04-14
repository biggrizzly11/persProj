angular.module('app', ['ui.router'])
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
				controller: 'aboutCtrl',
				templateUrl: 'about.html'
			})
			.state('projects', {
				url: '/projects',
				controller: 'projectsCtrl',
				templateUrl: 'projects.html'
			});


	});