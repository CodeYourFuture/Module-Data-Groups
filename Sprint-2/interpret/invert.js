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

console.log(invert({a:1, b:2, apple:4}))

// a) What is the current return value when invert is called with { a : 1 } 
// it returns {key:1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// it returns {key:2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// the target return value should be {'1': 'a','2':'b'}

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries(obj) lets  loop [key, value] pairs easily because .entries(object/array) is built in method in javascript

// d) Explain why the current return value is different from the target output
// Because invertedObj.key=value is wrong which means  key of property will be always 'key'  and value will remains the same as obj array in invertedObj

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// I put invertedObh[value]= key instead then the function works as expected