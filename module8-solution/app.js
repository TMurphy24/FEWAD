//IFFY
//https://ychaikin.github.io/jhu-ajax-course/Module8
//https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json
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
                    console.log(categoryKey)
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
                
                    
                //found array
                //perform if-
                //includes (searchitem)
            console.log('response.data: ', response.data);
            console.log(searchTerm);
            console.log(self.found)

         // $scope.myWelcome = 'Your IP is ' + response.data['origin'] + ', we welcome you here!';
        // var categoryKey = 'FR';
         //$scope.myCategory = 'Your category name is ' + response.data[categoryKey]['category']['name'] + ', and is one of many category types!';
            //$scope.myFirtMenuItem = 'Your first menu item is ' + response.data[categoryKey]['menu_items'][0]['name'] + ', and is one of many items!';
        
    });
     };  
      })

      
    .controller('NarrowItDownController', function($scope, $injector, MenuSearchService) {
            $scope.getMatchedMenuItems = MenuSearchService.getMatchedMenuItems

        console.log('Narrow it Down')
      })


})();

 