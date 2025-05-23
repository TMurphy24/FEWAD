(function () {
    'use strict';

    //angular.module('MenuApp',['ui.router']);
  
    angular.module('MenuApp')
      .config(RoutesConfig);
  
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
  
      //Set up UI states - 36 Part 2
      $stateProvider
        .state('home', {
          url: '/',
          template: '<h1>Welcome to my little Restaurant</h1>'
        })

        //Part 37 Part 2 - 3:20
        .state('categories', {
            url: '/categories',
            //template: '<h1>Welcome to Restaurant Menu Start</h1>',
            template: '<ul><li ng-repeat="cat in categories"> <a ui-sref="items({categoryShortName: cat.short_name})">{{ cat.name }}</a></li></ul>',
            controller: 'CategoriesController',
            resolve: {
              categories: ['MenuDataService', function(MenuDataService) {
                return MenuDataService.getAllCategories();
              }]
             }
          })
          
          .state('items', {
            //url: '/items',
            url: '/items/{categoryShortName}',
            template: '<ul><li ng-repeat="item in ctrl.items"><a>{{ item.name }}</a></li></ul>',
            controller: 'ItemsController',
            controllerAs: 'ctrl',
            resolve: {
              items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
                return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
              }]
            }
          });  
        }
     })();
  //Part 9
 