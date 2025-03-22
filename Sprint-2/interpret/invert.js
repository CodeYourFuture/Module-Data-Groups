// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
  //  invertedObj.key = value ;    original code 

    invertedObj[value] = key;   // implement code to fix. 
  }

  return invertedObj;
}

const numbers = {a : 1,b: 2};
console.log(invert(numbers));

// a) What is the current return value when invert is called with { a : 1 }
// Ans : {key : 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Ans : {key : 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// Ans : {"1": "a","2":"b"}

// c) What does Object.entries return? Why is it needed in this program?
// Ans : it return array [], It is needed because it will allow to object to loop .

// d) Explain why the current return value is different from the target output
// in the for loop it is assign the object [key] as "key" string value .That is why it is different from the target output.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
