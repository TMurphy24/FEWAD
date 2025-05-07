// Check for correct image to be returned
// when the short_name is found and for favoriteDish and short_name

//container for all tests
describe("searchDishImages", function() {
  var shortName;

  //arguemnt to be invoked once before each test
  beforeEach(function() {
    shortName = ['BB'];

    // //Test 2 - Pass
    // shortName = ['D3']; 

    // //Test 3 - Failure
    // shortName = ['22']; 

    // //Test 4 - Pass
    // shortName = ['C15'];

    // //Test 5 - Pass
    // shortName = ['FR'];
  });

  //

it("should be able to find food images", function() {
  var result = searchDishImages(searchTerm);
  expect(result).toBe(true);
  })
});

