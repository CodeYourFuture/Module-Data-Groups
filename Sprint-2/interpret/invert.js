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

const profile = {
  name: "Alex",
  age: 19,
  occupation: "student",
};

//console.log(Object.entries(profile));
//const result = invert(profile);
//console.log(result);

// console.log(invert({ a: 1, b: 2 }));

// a) What is the current return value when invert is called with { a : 1 }
// {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// {1 : a, 2: b}

// c) What does Object.entries return? Why is it needed in this program?
// It returns e.g. [ [ 'name', 'Alex' ], [ 'age', 19 ], [ 'occupation', 'student' ] ] array of arrays
// It is needed because we want to iterate through an array to get key and values pars for new object.

// d) Explain why the current return value is different from the target output
// The current return value is different from the target output because the function
// is working improperly. First of all, the key should be taken on brackets to make possible
// to read every key name-value and value in every pair in subarray.
// invertedObj.key = value: This is a direct assignment. It treats "key" as a literal string
// and creates or updates a property named "key" on the invertedObj object, setting its value
// to the value of the value variable.
// invertedObj[key] = value: This uses bracket notation. It evaluates the key variable and uses
// its value (which is a string) as the property name on invertedObj.
// Secondly, change the key and value places for new object creation statement
// 'invertedObj[value] = key;' to get swapping the keys and values in the new object.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

module.exports = invert;
