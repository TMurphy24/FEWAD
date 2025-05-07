//create component called categories that shows all available
//categories in the menu to the user
//Part 6
//Part 37

(function () {
  'use strict';
  
  angular.module('data', [])
  .component('categories', {
    controller: CategoriesController,
    bindings: {
      categories: '<',
    }
  })

  function CategoriesController() {
    var $ctrl = this;
    $ctrl.$onInit = function () {//Lesson 33
      console.log('categories: ', $ctrl.categories); 
    };
  
  }

  
  })();