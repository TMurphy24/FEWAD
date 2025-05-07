//Mod 8? nARROW IT down
(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  
  service.getMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      console.log(response.data)
      return response.data;
      
    });
  };

  service.foodPics = function () {
    return $http.get('/images/menu/').then(function(response) {
      return response.data;
    });
   };

//Pre-search function - Mod 8 
//Search with FavDIsh value from button
//Task 1
$scope.searchByFavoriteDish = function() {
  var shortName = reg.user.favoriteDish;//search the user input  
  if (shortName) {
    MenuService.getMenuItems(shortName.toUpperCase()) 
      .then(function (data) {
        $scope.menuItems = data.menu_items;
      })
      .catch(function (error) {
        console.log("Error fetching items")
      });
  }
};

//Combine Search Image with searchword?
$scope.searchDishImages = function() {
  var shortName = reg.user.favoriteDish;//search the user input  
  if (shortName) {
    MenuService.foodPics(shortName.toUpperCase()) 
      //display image to html
  }
};
};
})();
