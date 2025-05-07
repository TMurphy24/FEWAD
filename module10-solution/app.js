// Signup and Registrations Handeling
// https://www.geeksforgeeks.org/how-to-store-data-in-local-storage-using-angularjs/#
// https://www.w3schools.com/angular/angular_services.asp
// https://www.geeksforgeeks.org/angularjs-location-service/

(function () {

    angular.module('SimpleFormsApp',['ui.router']);
    
    angular.module('SimpleFormsApp')
    .service('UserProfile', function($window) {
      var personalInfo = {};
    
    
      this.saveInfo = function(qType, answer) {
        personalInfo[qType] = answer;
        $window.localStorage.setItem('personalInfo', JSON.stringify(personalInfo)); 
      };
    
      this.getInfo = function(qType) {
        if (personalInfo[qType]) return personalInfo[qType];
    
        var stored = $window.localStorage.getItem('personalInfo');
        if (stored) {
          personalInfo = JSON.parse(stored);
          return personalInfo[qType] || null;
        }
        return null;
      };
    
      this.getFullInfo = function() {
        var stored = $window.localStorage.getItem('personalInfo');
        if (stored) {
          personalInfo = JSON.parse(stored);
        }
        return personalInfo;
      };

      //copy over from one html to another html
      var user = {};

      this.setUser = function(u) {
          angular.copy(u, user);
      };
  
      this.getUser = function() {
          return user;
      };
    })

    //User profile info
    .controller('RegistrationController', ['$scope', 'UserProfile', '$state', 
    function($scope, UserProfile, $state) {
    $scope.reg = {};
    $scope.reg.user = {
      firstName: '',
      lastName: '',
      myemail: '',
      myphone: '',
      favoriteDish: ''
    };

      //profile check
      console.log($scope.reg);

     //Moving over to Registration page for confirmation
      $scope.submit = function() {
        UserProfile.setUser($scope.reg.user);
        $location.path('/registered.html'); //error
      };

      $scope.submit = function () {
        UserProfile.setUser($scope.reg.user);  
        $location.go('/sign_up.html'); //error
      };
    }])
  
    .controller('DataMoverController', function($scope, UserProfile) {
      $scope.user = UserProfile.getUser();
    });
  })();
    
