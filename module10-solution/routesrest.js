//https://www.w3schools.com/angular/angular_services.asp

(function() {
  'use strict';
  
  angular.module('SimpleFormsApp' , ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
      // Default route
      $urlRouterProvider.otherwise('/');
  
      $stateProvider
          .state('index', {
              url: '/index',
              templateUrl: 'index.html',
          })
          .state('registration', {
              url: '/registration',
              templateUrl: 'registered.html',
              controller: 'RegistrationController'
          })
          .state('signup', {
              url: '/signup',
              templateUrl: 'sign_up.html',
              controller: 'DataMoverController'
          });
  });
})();