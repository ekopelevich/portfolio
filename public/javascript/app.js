var app = angular.module('portfolioApp', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('about', {
      url: '/',
      templateUrl: '../partials/about.html'
    })
    .state('projects', {
      url: '/projects',
      templateUrl: '../partials/projects.html'
    })
    .state('resume', {
      url: '/resume',
      templateUrl: '../partials/resume.html'
    });
  });
