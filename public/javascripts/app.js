var app = angular.module('portfolioApp', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/about');
  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'partials/about.html'
    })
    .state('projects', {
      url: '/projects',
      templateUrl: 'partials/projects.html'
    })
    .state('planit', {
      url: '/projects/planit',
      templateUrl: 'partials/projects/planit.html',
    })
    .state('weeks', {
      url: '/projects/weeks',
      templateUrl: 'partials/projects/weeks.html',
    })
    .state('reasonabout', {
      url: '/projects/reasonabout',
      templateUrl: 'partials/projects/reasonabout.html',
    })
  });
