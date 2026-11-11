// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    // it's the error
    // invertedObj.key = value;
    // fixed the code
    invertedObj[value] = key;
  }

  return invertedObj;
}
module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// ==>The return value when invert is called is "a":"1"
// b) What is the current return value when invert is called with { a: 1, b: 2 }
// ==>The return value when invert is called are "a":"1", "b":"2"
// c) What is the target return value when invert is called with {a : 1, b: 2}
// ==>The target return value when invert is called with{a:1, b: 2} are "1": "a", "2": "b"
// c) What does Object.entries return? Why is it needed in this program?
// ==>It turns an object into an array of [key, value] pairs. Object.entries({ a: 1, b: 2 }) gives [["a", 1], ["b", 2]]. It’s needed because a for...of loop can’t go through a plain object directly, and the function needs both the key and the value of each property. Object.entries provides both, and const [key, value] unpacks each pair.
// d) Explain why the current return value is different from the target output
// ==>first it used the dot notation instead of square bracket which is accessing the property using  a literal name
// ==>second it is not inverted it still uses key value instead of value key so that it returns the inverted one.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// ==>i have fixed the code and for testing i made the another file and make the edges cases.
