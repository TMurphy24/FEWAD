//Example 37 - shoppingList.service.js
//Example 33
//Create component called items
//Part 7

//Part 37 - items example
(function () {
  'use strict';

  angular.module('data')
  .component('items', {
    controller: ItemsController,
    bindings: {
      items: '<'
    }
  });

function ItemsController() {
  var $ctrl = this;

    $ctrl.$onInit = function () {
    console.log('Menu items:', $ctrl.items);
  };
}


  })();