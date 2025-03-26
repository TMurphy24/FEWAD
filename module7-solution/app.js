//IFFY
(function(){
    var myMod = angular.module('ShoppingListCheckOff', [])
    
    .service('ShoppingListCheckOffService', function() {
        this.buy = {
          "pancakes" : {name: "pancakes", quantity: 8, pricePerItem: 8},
          "oranges" : {name: "oranges", quantity: 3, pricePerItem: 4},
          "cucumbers" : {name: "cucumbers", quantity: 2, pricePerItem: 3},
          "potatoes" : {name: "potatoes", quantity: 4, pricePerItem: 6},
          "thin mints" : {name: "thin mints", quantity: 10, pricePerItem: 20},
          "avocados" : {name: "avocados", quantity: 7, pricePerItem: 15}
    };
        //
        //BOUGHT ARRAY
        this.bought = {
          // "pancakes" : {name: "pancakes", quantity: 0, pricePerItem: 8},
          // "oranges" : {name: "oranges", quantity: 0, pricePerItem: 4},
          // "cucumbers" : {name: "cucumbers", quantity: 0, pricePerItem: 3},
          // "potatoes" : {name: "potatoes", quantity: 0, pricePerItem: 6},
          // "thin mints" : {name: "thin mints", quantity: 0, pricePerItem: 20},
          // "avocados" : {name: "avocados", quantity: 0, pricePerItem: 15}
       
    };

        //  this.buy = [
        //   {name: "pancakes", quantity: 8, pricePerItem: 8},
        //   {name: "oranges", quantity: 3, pricePerItem: 4},
        //   {name: "cucumbers", quantity: 2, pricePerItem: 3},
        //   {name: "potatoes", quantity: 4, pricePerItem: 6},
        //   {name: "thin mints", quantity: 10, pricePerItem: 20},
        //   {name: "avocados", quantity: 7, pricePerItem: 15}
        // ];
        // //
        // //BOUGHT ARRAY
        // this.bought = [
        //   {name: "pancakes", quantity: 0, pricePerItem: 8},
        //   {name: "oranges", quantity: 0, pricePerItem: 4},
        //   {name: "cucumbers", quantity: 0, pricePerItem: 3},
        //   {name: "potatoes", quantity: 0, pricePerItem: 6},
        //   {name: "thin mints", quantity: 0, pricePerItem: 20},
        //   {name: "avocados", quantity: 0, pricePerItem: 15}
       
        // ];
        
        //}
       
      })
    .controller('ToBuyController', function($scope, $injector, ShoppingListCheckOffService) {
        console.log(Object.keys(ShoppingListCheckOffService.buy).length)//list size check
        $scope.buy = ShoppingListCheckOffService.buy
        $scope.bought = ShoppingListCheckOffService.bought
        //ref to buy 
        for (val in $scope.buy)  
          console.log(val) 
        //https://www.w3schools.com/howto/howto_js_remove_property_object.asp
        $scope.buyfood = function(food) {
          if ($scope.buy[food]) {
            if (!$scope.bought[food]) {
            $scope.bought[food] = angular.copy($scope.buy[food]);
            console.log($scope.bought);
            }
            delete $scope.buy[food];
            
          }
        console.log(food)
        };
      })

    .controller('AlreadyBoughtController', function($scope, $injector, ShoppingListCheckOffService) {
      console.log(Object.keys(ShoppingListCheckOffService.bought).length)//keeping track of list changes
      $scope.buy = ShoppingListCheckOffService.buy
      $scope.bought = ShoppingListCheckOffService.bought

        //https://www.w3schools.com/angular/angular_filters.asp
        //repepative, not needed twice - remove later
        $scope.buyfood = function(food) {
          if ($scope.buy[food]) {
              if (!$scope.bought[food]) {
                  $scope.bought[food] = angular.copy($scope.buy[food]);
                  console.log($scope.bought);
              }
          $scope.findPriceTotal = function(item) {
              if ($scope.bought[item]) {
                let total_price = $scope.bought[item];
                return total_price.quantity * total_price.pricePerItem;
                
                
              }
              console.log(findPriceTotal(item))//price check - not working?
            }; 
            }
        };
        
    });
    //filter for custom dollar amounts
    // myMod.filter('myBill', function(){
    //display total_price in $$$
    // }); 

})();

 