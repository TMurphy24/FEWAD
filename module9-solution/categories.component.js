//create component called categories that shows all available
//categories in the menu to the user
//pART 6
//Part 37

(function () {
  'use strict';
  
  angular.module('data')
  .controller('categories',);
  
  
  CategoriesController.$inject = ['data'];
  function CategoriesController(ShoppingListService) {
    var mainList = this;
    mainList.items = [];
  
    mainList.$onInit = function () {
      ShoppingListService.getItems()
      .then(function (result) {
        mainList.items = result;
      });
    };
  }
  
  })();