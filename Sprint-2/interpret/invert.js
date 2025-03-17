// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
console.log(invert({ a: 1 })); // { 1: 'a' }

// a) What is the current return value when invert is called with { a : 1 } // {a: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 } // {a: 1, b: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2} // {"1": "a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program?   // it needed because this method returns the key-value pair in an array of arrays, where each inner array contains a key-value pair. 

// d) Explain why the current return value is different from the target output // because the current implementation is only assigning the key to the value, not the value to the key. 

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// solution: 
test("invert correctly swaps keys and values", () => {
  expect(invert({ a: 1 })).toEqual({ 1: 'a' });
  expect(invert({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
});
// i refactored the invert function to swap keys and values: 
// invertedObj[key] = value; // to invertedObj[value] = key;

