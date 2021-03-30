const eqArrays = function(ar1, ar2) {
  if (ar1.length !== ar2.length) {
    return false;
  }

  for (let i = 0; i <= ar1.length; i++) {
    if (ar1[i] !== ar2[i]) {
      return false;
    }
  }
  
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
};

const flatten = function (arrayToFlat) {
  let fltArry = [];

  for (let item of arrayToFlat) {
    if(item.length > 1){
      for(let subItem of item) {
        fltArray += subItem;
      }
    } else {
      fltArray += item;
    }
  }

  return fltArry;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]) );

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS