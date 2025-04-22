(function () {
    'use strict';

    angular.module('MenuApp',['ui.router']);
  
    angular.module('MenuApp')
      .config(RoutesConfig);
  
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
      // Redirect to home page if no other URL matches - failsafe
      $urlRouterProvider.otherwise('/');
  
      //Set up UI states - 36 Part 2
      $stateProvider
        .state('home', {
          url: '/home',
          template: '<h1>Welcome to my little Restaurant</h1>'
        })

        //Part 37 Part 2 - 3:20
        .state('categories', {
            url: '/categories',
            template: '<ul><li ng-repeat="item in $ctrl.items"> {{item.quantity}} of {{item.name}} </li></ul>',
            controller: ''
            
          })
          
          .state('tab2', {
            url: '/tab2',
            template: '<h1>Welcome to other Restaurant</h1>'
          });
          
    }
  })();
  //Part 9
  //These routes should be defined in the MenuApp module
  