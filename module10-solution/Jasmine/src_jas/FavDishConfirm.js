//Inject info for the sake of demonstration
//food search verification
//https://jasmine.github.io/

 //User profile info
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


$scope.searchByFavoriteDish = function() {
var shortName = reg.user.favoriteDish;//search the user input  
if (shortName) {
  MenuService.getMenuItems(shortName.toUpperCase()) 
    .then(function (data) {
      $scope.menuItem = data.menu_item;
    })
    .catch(function (error) {
      console.log("Error fetching items")
    });
  }
};


