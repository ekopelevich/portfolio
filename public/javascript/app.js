var app = angular.module('portfolioApp', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/about');
  $stateProvider
    .state('about', {
      url: '/about',
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
