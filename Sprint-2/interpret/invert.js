// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

// function invert(obj) {
//   const invertedObj = {};

//   for (const [key, value] of Object.entries(obj)) {
//     invertedObj.key = value;
//   }

//   return invertedObj;
// }

// a) What is the current return value when invert is called with { a : 1 }
// the current return value is: {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// the current return value when invert is called is : {key: 2}

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of the given object's own enumerable string-keyed property key-value pairs. ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// it is needed because both key and values are converted to strings which is the desired output.

// d) Explain why the current return value is different from the target output
// It is different because the key and value are not swapped and value should be in bracket.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const isObj = Object.prototype.toString.call(obj) === "[object Object]";

  if (!isObj) {
    throw new Error(
      "param is not valid data type. Invert must receive an object"
    );
  }
  
  const invertedObj = {};
  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

module.exports = invert;
