//IFFY
(function(){
    var myMod = angular.module('ShoppingListCheckOff', [])
    
    .service('ShoppingListCheckOffService', function() {
        //this.myFunc = function (x) {
        //TO BUY ARRAY
        //https://www.geeksforgeeks.org/angularjs-angular-isarray-function/#
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
          "pancakes" : {name: "pancakes", quantity: 0, pricePerItem: 8},
          "oranges" : {name: "oranges", quantity: 0, pricePerItem: 4},
          "cucumbers" : {name: "cucumbers", quantity: 0, pricePerItem: 3},
          "potatoes" : {name: "potatoes", quantity: 0, pricePerItem: 6},
          "thin mints" : {name: "thin mints", quantity: 0, pricePerItem: 20},
          "avocados" : {name: "avocados", quantity: 0, pricePerItem: 15}
       
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
        //https://www.w3schools.com/Angular/ng_ng-repeat.asp
        //
        //https://www.geeksforgeeks.org/copy-array-items-into-another-array-in-javascript/
        //when button hit if on buy then push item to bought

        //calculate all prices and display
        //will calculate only items in bought list
        //

      })
    .controller('ToBuyController', function($scope, $injector, ShoppingListCheckOffService) {
        console.log(ShoppingListCheckOffService.buy.length)
        $scope.buy = ShoppingListCheckOffService.buy
        $scope.bought = ShoppingListCheckOffService.bought
        //ref to buy - can create the buy function
        for (val in $scope.buy)  
          console.log(val) 

        $scope.buyfood = function(food) {
        console.log(food)
        //storing value from buy
        //grab quant from buy[food], store in qty
        //subtract qty from buy and then add to bought
        };
        //ng-click call to Shopping
        //if button click, remove from 
        //https://www.w3schools.com/angular/ng_ng-click.asp
        })

    .controller('AlreadyBoughtController', function($scope, $injector, ShoppingListCheckOffService) {
      console.log(ShoppingListCheckOffService.bought.length)
      $scope.bought = ShoppingListCheckOffService.bought
        //ref to bought



        
    });
    //https://w20-framework.github.io/guides/angularjs-dependency-injection/
       myMod.value('greeting', function(name) {
           alert("Hello, " + name);
         });

})();

 