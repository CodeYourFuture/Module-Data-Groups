// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    if (invertedObj[value] === undefined) {
      invertedObj[value] = key;
    } else if (Array.isArray(invertedObj[value])) {
      invertedObj[value].push(key);
    } else {
      invertedObj[value] = [invertedObj[value], key];
    }
  }

  return invertedObj;
}
// a) What is the current return value when invert is called with { a : 1 }
//{"1": "a"}.
// b) What is the current return value when invert is called with { a: 1, b: 2 }
//{"1": "a", "2": "b"}
// c) What is the target return value when invert is called with {a : 1, b: 2}
//{"1": "a", "2": "b"}
// c) What does Object.entries return? Why is it needed in this program?
// Object.entries(obj) returns an array of [key, value] pairs, where each pair is stored as an array. 
// It is needed in this program so we can loop through both the keys and values of the object at the same time when inverting it.
//it returns an array of arrays, where each inner array is a pair: [key, value].
//The current return value is different from the target output because when multiple keys have
// the same value, they overwrite each other when inverted. This causes some values to be lost.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    // Check if the value already exists as a key in our new object
    if (invertedObj[value] === undefined) {
      // First time seeing this: Save it as a string
      invertedObj[value] = key;
    } else if (Array.isArray(invertedObj[value])) {
      // It's already an array: Add the new key to the list
      invertedObj[value].push(key);
    } else {
      // It's a string: Turn it into an array and add the new key
      invertedObj[value] = [invertedObj[value], key];
    }
  }

  return invertedObj;
}

// --- CONSOLE TESTS ---
console.log("Test 1 (Simple):", invert({ a: 1 })); 
// Expected: { "1": "a" }

console.log("Test 2 (No duplicates):", invert({ x: 10, y: 20 })); 
// Expected: { "10": "x", "20": "y" }

console.log("Test 3 (Collision):", invert({ a: 1, b: 1 })); 
// Expected: { "1": ["a", "b"] }

console.log("Test 4 (Triple collision):", invert({ a: 1, b: 1, c: 1 })); 
// Expected: { "1": ["a", "b", "c"] }
