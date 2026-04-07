// Let's define how invert should work

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

// a) What is the current return value when invert is called with { a : 1 }
// the current return value when invert is called with { a:1 } is  { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// the current return value  when invert is called with { a: 1, b: 2 } is  { key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// the target return value when invert is called with {a : 1, b: 2} is { '1':'a','2':'b'}

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries is needed because it will gave as the access of the key and value by separating each key value pair.

// d) Explain why the current return value is different from the target output
/*the current value is different from the targeted value because the for loop already give as access for the key value pairs 
but when we declare a new object the function where looking the word key in the loop because it was dot notation and taking the 
word key and pairing it withe the last loop value. */

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
/*  function invert(obj) {
     const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
          invertedObj[value] = key;
    }

  return invertedObj;
} */
