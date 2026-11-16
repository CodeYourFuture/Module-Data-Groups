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

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// Answer: Return value when called with { a : 1 } { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Answer: Return value when called with { a: 1, b: 2 } { key: 2 } (because the loop runs twice, overwriting invertedObj.key each time)

// c) What is the target return value when invert is called with {a : 1, b: 2}
// Answer: Target return value when called with { a : 1, b: 2 } { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// Answer: Object.entries() takes an object and turns it into a list of [key, value] pairs so that a loop can read them.Because plain JavaScript objects can't be looped through directly by themselves, Object.entries() acts like a translator—it converts your object into a list (like [['a', 1], ['b', 2]]) so you can easily grab both the keys and values at the same time.

// d) Explain why the current return value is different from the target output
// Answer: It writes the literal word "key": Writing invertedObj.key = value tells JavaScript to literally create a property named "key" over and over again, instead of using bracket notation (invertedObj[value]) to look up and use the actual variable value.
// It doesn't actually swap them: The code assigns the original value to key, whereas an inversion needs to flip them so the original value becomes the new key pointing back to the original key (invertedObj[value] = key).

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
