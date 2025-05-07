//Reworked to food search tests


//container for all tests
describe("searchByFavoriteDish", function() {
  var shortName;

  //arguemnt to be invoked once before each test
  beforeEach(function() {
    //Test 1 - Failure
    shortName = ['BB'];

    // //Test 2 - Pass
    // shortName = ['D3']; 

    // //Test 3 - Failure
    // shortName = ['22']; 

    // //Test 4 - Pass
    // shortName = ['C15'];
  });


  //
it("should be able to detect the favorite dish", function() {
  var result = searchByFavoriteDish(searchTerm);
  expect(result).toBe(true);
  })
});




// describe("ProfileValidation", function() {
//   var reg;
//   var reg.user;

//   //Multiple Tests set up
//   beforeEach(function() {
//     profilewrong = { firstName: 'K',
//                      lastName: 'Lee',
//                      myemail: 'kdlee@hotmail.com',
//                      myphone: '460-236-7143',
//                      favoriteDish: 'B3'};

    //Version 2
    // profileright = { firstName: 'Katherine',
    //                  lastName: 'Lee',
    //                  myemail: 'kdlee@hotmail.com',
    //                  myphone: '460-236-7143',
    //                  favoriteDish: 'B3'};

    //Version 3
    // profilerigh1 = { firstName: 'Katherine',
    //                  lastName: 'Lee',
    //                  myemail: 'kdlee@hotmail.com',
    //                  myphone: '460-236-7143',
    //                  favoriteDish: 'RW'};

    //Version 4
    // profilewrong1 = { firstName: 'Katherine',
    //                  lastName: 'Lee',
    //                  myphone: '1-460-236-7143',
    //                  favoriteDish: '3'};

    //Version 5
    // profilewrong2 = { firstName: 'Katherine',
    //                  lastName: 'Lee',
    //                  myemail: 'kdlee@hotmail.com',
    //                  favoriteDish: '3'};
  

  //One checks for completed fields in all areas and for missing area 
  //WILL NOT check for the more specific rules like more then 2 letters etc.
//   it("should produce an failed profile", function() {
//     var reg.user = getRandomOddOrEven1to10("odd", randomNumGenerator3);
//     expect(result).toEqual(3);
//   });

//   xit("should produce good profile", function() {
//     var reg.user = getRandomOddOrEven1to10("even", randomNumGenerator8);
//     expect(result).toEqual(8);
//   });
// });
