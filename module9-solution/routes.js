(function () {
    'use strict';
  
    angular.module('MenuApp')
      .config(RoutesConfig);
  
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
      // Redirect to home page if no other URL matches - failsafe
      $urlRouterProvider.otherwise('/');
  
      //Set up UI states
      $stateProvider
        .state('home', {
          url: '/home',
          template: '<h1>Welcome to our Restaurant</h1><a ui-sref="categories">Go to Categories</a>'
        })
        .state('categories', {
            url: '/categories',
            templateUrl: 'categories.template.html',
            // controller: 'CategoriesController as catCtrl',
            // resolve: {
            //   items: ['MenuDataService', function(MenuDataService) {
            //     return MenuDataService.getAllCategories();
            //   }]
            // }
          })
          
          .state('items', {
            url: '/',
            template: '<h1>Welcome to our Restaurant</h1><a ui-sref="categories">Go to Categories</a>'
          });

          
    }
  })();
  //Part 9
  //These routes should be defined in the MenuApp module
  