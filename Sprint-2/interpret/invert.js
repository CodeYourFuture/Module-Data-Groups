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



// a) What is the current return value when invert is called with { a : 1 } answer key:1

// b) What is the current return value when invert is called with { a: 1, b: 2 }  answer key:2

// c) What is the target return value when invert is called with {a : 1, b: 2}   answer 1:'a', 2:'b'

// c) What does Object.entries return? Why is it needed in this program?  answer it returns the key-value pairs inside the object in to arrays
//so we can access both keys and values

// d) Explain why the current return value is different from the target output   answer because they aren't swapped yet

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
let invertObj = invert({ a: 1, b: 2 });
console.assert(JSON.stringify(invertObj)===JSON.stringify({"1":"a","2":"b"}), 't1 expected {"1":"a","2":"b"}')
console.assert( JSON.stringify(invertObj) !== JSON.stringify({ 2: "a", 2: "b" }),'t2 expected {"1":"a","2":"b"}');
const emptyObj=invert({});
console.assert(JSON.stringify(emptyObj) === JSON.stringify({}),'Expected {}');