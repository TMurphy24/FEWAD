
(function () {
  'use strict';

  angular.module('MenuApp', ['ui.router', 'data'])
    .controller('CategoriesController', CategoriesController)
    .controller('ItemsController', ItemsController);

  // CategoriesController
  CategoriesController.$inject = ['$scope', 'categories'];
  function CategoriesController($scope, categories) {
    $scope.categories = categories;
  }

  // ItemsController
  ItemsController.$inject = ['$scope', 'items'];
  function ItemsController($scope, items) {
    var items = category['menu_items'];
    $scope.items = items;
  }

})();




  