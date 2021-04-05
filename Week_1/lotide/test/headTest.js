const assert = require('chai').assert;
const head   = require('../head');
const assertEqual = require('../assertEqual')



// TEST CODE

// assertEqual(head());


describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  
  
  // assertEqual(head([5,6,7]), 5);
  it("returns '5' for ['5']", () => {
    assertEqual(head([5,6,7]), 5);
  });
  
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

it("returns 'hello' for Hello, Lighthouse, Labs", () => {
  assertEqual(head([5,6,7]), 5);
});

// assertEqual(head());
it("returns undefined when given an undefined value", () => {
  assertEqual(head(), );
});

  /////////////// END OF DESCRIBE //////////////////////////////////////////////////
});