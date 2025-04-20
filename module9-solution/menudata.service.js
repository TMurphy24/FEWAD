(function () {
    'use strict';
  
    angular.module('data')//data module
      .service('MenuDataService', MenuDataService);
  
    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) { 
      this.getAllCategories = function () {
        return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/categories.json")
                    .then(response => response.data);
      };
    //Point 5
    function getItemsForCategory(categoryShortName){ 
      return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/{categoryShortName}.json")
                    .then(response => response.data);
      };
    }
  })(); 