// Verison 1
//https://jasmine.github.io/

//Pre-search function - Mod 8 
//Search with FavDIsh value from button
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
      $scope.photos = response.data;
      console.log(photos)//?
    });
  }


//Combine Search Image with searchword?
//images/menu/
 $scope.searchDishImages = function() {
  var shortName = reg.user.favoriteDish;//search the user input  
  if (shortName) {
    MenuService.foodPics(shortName.toUpperCase()) 
      //display image to html
  }
};

