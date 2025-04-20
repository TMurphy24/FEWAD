(function () {
    'use strict';
  
    angular.module('data')//data module
      .service('MenuDataService', MenuDataService);
  
    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) { //Part 5A
      this.getAllCategories = function () {
        return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/categories.json")
                    .then(response => response.data);
      };
    //Part 5B
    function getItemsForCategory(categoryShortName){ //link issue
      return $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json")
                    .then(otherresponse => otherresponse.data);
      //const url = 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json'
      //return $http.get(url);
      };
    }
  })(); 