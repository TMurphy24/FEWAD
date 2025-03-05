//IFFY
(function(){
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', function($scope, $injector) {
        $scope.hearfood = '';
        $scope.fdnumlist = [];
        $scope.listrespo = function(){
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
            $scope.fdnumlist = $scope.hearfood.split(',');
        };
    });
})();

 