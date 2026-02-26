// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  // need obj == null because 'type of obj === null' does not work in Js
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new TypeError("Input must be a plain object");
  }

  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    // if a value is not a number or string, it can't be used as a key in the inverted version
    if (typeof value !== "string" && typeof value !== "number") {
      throw new TypeError(`Value ${JSON.stringify(value)} is not a valid key`);
    }
    invertedObj[String(value)] = String(key);
  }

  return invertedObj;
}

module.exports = invert;
// a) What is the current return value when invert is called with { a : 1 }
/* 
It would return {key: 1}. The dot nation means that it uses the string "key" as the key.
and the value for that key is the value from the object being iterated over.
*/

// b) What is the current return value when invert is called with { a: 1, b: 2 }
/*
It would return {key : 2}. First it would do as in a, and the overwrite the value of the key "key"
from 1 to 2.
*/

// c) What is the target return value when invert is called with {a : 1, b: 2}
/*
The target is {"1": "a", "2": "b"}
*/

// c) What does Object.entries return? Why is it needed in this program?
/*
It returns a 2d array containing arrays of key value pairs from the object of the form:
[[key1, value1], [key2, value2], [key3, value3]].

It is needed because can't iterate over objects the same way as arrays. Objects are a bit more 
complicated, because you have to decide if you want to iterate over the keys, values, or both.
you also have to decide if you want to include inherited properties. 

Object.entries() makes this assumption for you, by including only the object's own properties. 
It also just makes this particular task easier by accessing the key and value together.
If you wanted to include inherited properties you'd use (for ... in) loop.

*/
// d) Explain why the current return value is different from the target output
/*
The dot nation means that it uses the string "key" as the key.
and the value for that key is the value from the object being iterated over. 
So it just continuously overwrites that one "key" property of the to-be-returned object.

It's also swapping key, value from the old object.
*/

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
