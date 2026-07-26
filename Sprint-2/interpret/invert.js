// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    //invertedObj.key = value;
    invertedObj[value] = key;
  }

  return invertedObj;
}
/*
console.log(invert({ a: 1 })); // {1:a}
console.log(invert({ a: 1, b: 2 }));
console.log(invert({ a: 1, b: 2 }));
*/

// a) What is the current return value when invert is called with { a : 1 }
/*
    {
  key: 1;
}
  */
// b) What is the current return value when invert is called with { a: 1, b: 2 }
/*
    {
  key: 2;
}
  */
// c) What is the target return value when invert is called with {a : 1, b: 2}
// {"1":"a", "2":"b"}
// c) What does Object.entries return? Why is it needed in this program?
//object.entries takes an objecet and returns an array of its key-value pairs.
// d) Explain why the current return value is different from the target output
//because we use .key notation we are setting a property named "key" on our Object.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)

module.exports = invert;
