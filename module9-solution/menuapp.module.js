//https://docs.angularjs.org/guide/controller
//https://www.w3schools.com/Angular/angular_controllers.asp


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
    var ctrl = this;
    //lost menu_items fix?
    ctrl.items = items.menu_items;
    ctrl.categoryName = items.category && items.category.name;
}
})();




  