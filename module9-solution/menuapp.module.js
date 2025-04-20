(function () {
    'use strict';
    angular.module('MenuApp', ['ui.router'])
    .service('MenuDataService', function($http) {
      this.getAllCategories = function () {
        return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/categories.json")
                    // .then(response => response.data);
                    .then(function(response) {
                        console.log('response.data: ', response.data);
                        return response.data;
                    });
      };
    })
    // .controller('CategoriesController', function($scope, MenuDataService) {
    //   var items = MenuDataService.getAllCategories();
    //   console.log('items: ', items);
    //   console.log('items[0]: ', items[0]);
    //   $scope.items = items;
    // });

    // MenuDataService.$inject = ['$http'];
    
  })();  