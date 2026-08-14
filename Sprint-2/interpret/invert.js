// Let's define how invert should work
// inverse typically means to reverse the key and value in an object.
// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object
// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

// The original buggy implementation looked like this:
//
// function invert(obj) {
//   const invertedObj = {};
//   for (const [key, value] of Object.entries(obj)) {
//     invertedObj.key = value;
//     invertedObj[value] = key;
//   }
//   return invertedObj;
// }

// a) What is the current return value when invert is called with { a: 1 }?
// -> { key: 1, "1": "a" }
//    The line `invertedObj.key = value` sets a property literally named
//    "key" (not the loop variable's value) to 1, alongside the correct
//    inverted pair "1": "a" from the line below it.

// b) What is the current return value when invert is called with { a: 1, b: 2 }?
// -> { key: 2, "1": "a", "2": "b" }
//    Each loop iteration overwrites the same literal "key" property, so
//    only the last value assigned to it survives - here, 2 from { b: 2 }.

// c) What does Object.entries return, and why is it needed?
// -> Object.entries(obj) returns an array of [key, value] pairs, e.g.
//    [["a", 1], ["b", 2]]. It's needed because a for...of loop can't
//    iterate directly over an object's properties - Object.entries
//    converts the object into something iterable, and array
//    destructuring ([key, value]) lets us pull out both parts at once.

// d) Why is the current return value different from the target output?
// -> The bug is `invertedObj.key = value`. Because "key" is written as a
//    literal property name (dot notation), it always sets a property
//    called "key" rather than using the value of the loop variable
//    `key`. Only bracket notation - invertedObj[key] - would use the
//    variable's actual value as the property name. This line also isn't
//    needed at all for a correct inversion; it should be removed.

// e) Fix: remove the incorrect `invertedObj.key = value` line entirely,
//    leaving only `invertedObj[value] = key`, which correctly maps each
//    value to its original key. See invert.test.js for tests proving
//    the fix works, including empty objects and string values.
function invert(obj) {
  const invertedObj = {};
  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }
  return invertedObj;
}

module.exports = invert;