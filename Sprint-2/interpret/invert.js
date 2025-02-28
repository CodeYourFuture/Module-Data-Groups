/* Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}
console.log(invert({ a: 1, b: 2 }));
*/
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {   //we get [['a',1],['b',2]]
    invertedObj[value] = key;
  }

  return invertedObj;
}
console.log(invert({ a: 1, b: 2 }));
// a) What is the current return value when invert is called with { a : 1 }
// { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
//{"1": "a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program?
// it returns the array of key value pairs.

// d) Explain why the current return value is different from the target output
// we set invertedobj a key called key and put a value. this is not the same as what we was going to do.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)


function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
//i used separate function for testing instead of using separated file foe testing using jest.
function myTestForInvert() {
  let result = invert({ a: 1, b: 2 }); //for object with multiple values for different keys and values
  console.log(result); //expected output { '1': 'a', '2': 'b' }

  result = invert({ a: 1, b: 2, c: 1 }); //for duplicated values
  console.log(result); //expected output { '1': 'a', '2': 'b','1': 'c' }

  result = invert({}); //empty object
  console.log(result); //expected output {}

  result = invert({ a: null, b: undefined }); //testing for different data types
  console.log(result); //expected output { 'null': 'a', 'undefined': 'b' }

  result = invert({ a: { x: 1 }, b: { y: 2 } }); //testing for nested object as values
  console.log(result); //expected output { '{x:1}':'a','{y:2}':'b' } gives { '[object Object]': 'b' } ?why?
}
myTestForInvert();

