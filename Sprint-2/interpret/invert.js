// Let's define how invert should work
// inverse typically means to reverse the key and value in an object.
// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object
// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

//  The original buggy implementation looked like this:

// function invert(obj) {
//   const invertedObj = {};
//   for (const [key, value] of Object.entries(obj)) {
//     invertedObj.key = value;
//   }
//   return invertedObj;
// }

// a) What is the current return value when invert is called with { a: 1 }?
// -> { key: 1 }
//    Only invertedObj.key = value runs, setting a property literally
//    named "key" to 1. There is no swap line, so no "1": "a" pair
//    is ever added.

// b) What is the current return value when invert is called with { a: 1, b: 2 }?
// -> { key: 2 }
//    Each loop iteration overwrites the same literal "key" property.
//    First a: key becomes 1, then b: key gets overwritten to 2.
//    No other properties are ever added, since there's no line that
//    writes to invertedObj[value].

// c) What is the target return value when invert is called with { a: 1, b: 2 }?
// -> { "1": "a", "2": "b" }

// c) What does Object.entries return, and why is it needed?
// -> Object.entries(obj) returns an array of [key, value] pairs, e.g.
//    [["a", 1], ["b", 2]]. It's needed because a for...of loop can't
//    iterate directly over an object's properties - Object.entries
//    converts the object into something iterable, and array
//    destructuring ([key, value]) lets us pull out both parts at once.

// d) Why is the current return value different from the target output?
// -> Two problems: (1) invertedObj.key uses dot notation with the
//    literal word "key", so it always writes to a property called
//    "key" rather than using the loop variable's value. (2) The line
//    that would actually perform the inversion - invertedObj[value] = key -
//    is missing entirely, so the object is never built up with the
//    swapped key/value pairs.

// e) Fix: replace invertedObj.key = value with invertedObj[value] = key,
//    using bracket notation so the loop variable's value is used as the
//    property name. See invert.test.js for tests proving the fix works.
function invert(obj) {
  const invertedObj = {};
  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }
  return invertedObj;
}

module.exports = invert;