//IFFY
(function(){
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', function($scope, $injector) {
        $scope.hearfood = '';
        $scope.fdnumlist = [];
        $scope.listrespo = function(){
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
            $scope.fdnumlist = $scope.hearfood.split(',');
            //angular test, button test not working
            //if ($scope.fdnumlist.length === 0){
                //$scope.message = "Please enter data first";
            //} else if ($scope.fdnumlist.length <= 3) {
                //$scope.message = 'Enjoy';
            //} else {
                //$scope.message = 'Too much!';
            //}
        };
    });
})();

 