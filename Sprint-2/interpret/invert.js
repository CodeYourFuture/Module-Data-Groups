// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    // invertedObj.key = value;
    invertedObj[value] = key;
  }

  return invertedObj;
}
console.log(invert({ a: 1, b: 2 }));

// a) What is the current return value when invert is called with { a : 1 }
// Object.entries({ a: 1 })  gives [['a', 1]]
// so in the loop key = "a", value = 1
// the line invertedObj.key = value;  it adds a property with the key "key"  rather than using the variable key.
// { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// {key: 2} it overwrites the previous value of key


// c) What is the target return value when invert is called with {a : 1, b: 2}
// we want to change the position of the key and value
// {"1": "a", "2": "b}

// c) What does Object.entries return? Why is it needed in this program?
// it returns the object in to array
// Object.entries ({a: 1, b: 2}) returns 
// [["a", 1], ["b", 2]]

// d) Explain why the current return value is different from the target output
// this line invertedObj.key = value; 
// it is not using the key variable it is adding a property named key.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)


module.exports = invert;