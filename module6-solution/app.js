//IFFY
(function(){
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', function($scope, $injector) {
        $scope.hearfood = '';
        $scope.fdnumlist = [];
        $scope.listrespo = function(){
            $scope.fdnumlist = $scope.hearfood.split(',').map(item => item.trim());
            //angular test, button test not working
            if ($scope.fdnumlist.length === 0){
                $scope.message = "Please enter data first";
            } else if ($scope.fdnumlist.length <= 3) {
                $scope.message = 'Enjoy';
            } else {
                $scope.message = 'Too much!';
            }
        };
    });
})();

 