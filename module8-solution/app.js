//IFFY
//https://ychaikin.github.io/jhu-ajax-course/Module8
//https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json
//https://github.com/jhu-ep-coursera/fullstack-course5/blob/master/examples/Lecture30/app.js
(function(){
    var myMod = angular.module('NarrowItDownApp', [])
    
    .service('MenuSearchService', function($http) {
        //getMatchedMenuItems(searchTerm)
        var self = this
        
        self.found = []
    this.getMatchedMenuItems = function(searchTerm) {
        $http.get("https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
            .then(function(response) {
                for (categoryKey in response.data){//everything
                    console.log(categoryKey)//check
                    for (itemIndex in response.data[categoryKey]["menu_items"]){//just menu items under categorykey
                        var menuItem = response.data[categoryKey]["menu_items"][itemIndex]
                        var desc = menuItem["description"]
                        const caseInsensitiveIncludes = desc.toLowerCase().includes(searchTerm.toLowerCase());
                        console.log(caseInsensitiveIncludes)
                        if (caseInsensitiveIncludes) {
                            console.log(desc)
                            console.log(self.found)
                            self.found.push(menuItem)
                        } //only printing out found items (that include searchTerm)
                    }   
                }  
                
            console.log('response.data: ', response.data);
            console.log(searchTerm);
            console.log(self.found)

          });
        };  
      })

    .controller('NarrowItDownController', function($scope, $injector, MenuSearchService) {
            $scope.getMatchedMenuItems = MenuSearchService.getMatchedMenuItems
            .directive('foundItems', deleItem);

            function deleItem() {
                if ($scope.found[menuItem]) {
                    delete $scope.found[menuItem];
                }
              };
           
        console.log('Narrow it Down')
      })

})();

 