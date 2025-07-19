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
console.log(invert({ s: 1, c: 2 , p:5}));

// a) What is the current return value when invert is called with { a : 1 }
//  the current value is  { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// the current value is { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { '1': 'a', '2': 'b' }

// c) What does Object.entries return? Why is it needed in this program?
//  it returns one array containing smaller arrays — each one holds key and value, 
// and this lets us access the keys and values easily by looping the array

// d) Explain why the current return value is different from the target output
// because it returns a key that is called key not the key in the obj and  it equals the value which gives {key: value}

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// console.log(invert({ a: 1, b: 2 }));    returns  { '1': 'a', '2': 'b' }
// console.log(invert({ s: 1, c: 2, p: 5 }));  returns  { '1': 's', '2': 'c', '5': 'p' }