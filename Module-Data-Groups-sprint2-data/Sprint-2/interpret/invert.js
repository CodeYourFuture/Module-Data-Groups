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

console.log(invert({ a: 1 }));
// a) What is the current return value when invert is called with { a : 1 }
//{1: a }
{a : 1}
// b) What is the current return value when invert is called with { a: 1, b: 2 }
{a :1, b: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
{1 :a, 2: b }

// c) What does Object.entries return? Why is it needed in this program?
because for... loop doesn't recognize object insides, so by turning objects into objects.entries, it will become an array format that the for...loop function can recognize.


// d) Explain why the current return value is different from the target output
because we didn't switch the position of key and value insides the function.
Also we forgot to add [ ], it is to recognize the data insides item.



// e) Fix the implementation of invert (and write tests to prove it's fixed!)
