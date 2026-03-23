// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

/* function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}
  */

// a) What is the current return value when invert is called with { a : 1 }
// the current return value is { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// the current return value is { key: 1, key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// the target return value is { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
/* Object.entries returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
In this program, it is needed to iterate over the key-value pairs of the input object so that we can swap them and create the inverted object.
*/

// d) Explain why the current return value is different from the target output
/* The current return value is different from the target output because in the current implementation,
 we are assigning the value to a property named "key" in the inverted object,
  which means that every key-value pair in the input object will overwrite the same "key" property in the inverted object.
  As a result, only the last key-value pair from the input object will be reflected in the inverted object, leading to incorrect output.
  To achieve the target output, we need to use the value from the input object as the key in the inverted object and 
  the key from the input object as the value in the inverted object.
*/

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}



expect(invert({ a: 1, b: 2 })).toEqual({ '1': 'a', '2': 'b' });
