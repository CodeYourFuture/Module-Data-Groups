// a) What is the current return value when invert is called with { a : 1 }
// { key: 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 2 }

// c) What is the target return value when invert is called with { a: 1, b: 2 }
// { "1": "a", "2": "b" }

// d) What does Object.entries return? Why is it needed in this program?
// It returns an array of [key, value] pairs.
// It is needed so we can loop through both keys and values at the same time when inverting the object.

// e) Explain why the current return value is different from the target output
// The original code used 'invertedObj.key = value', which creates a property literally named "key"
// instead of using the value dynamically.
// This causes each iteration to overwrite the previous one.
// It also does not handle collisions (multiple keys with the same value).

// f) Fix the implementation of invert (and write tests to prove it's fixed!)
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

// --- CONSOLE TESTS TO PROVE IT IS FIXED ---
console.log("Test 1 (Simple):", invert({ a: 1 }));
// Expected: { '1': 'a' }

console.log("Test 2 (No duplicates):", invert({ x: 10, y: 20 }));
// Expected: { '10': 'x', '20': 'y' }

console.log("Test 3 (Collision):", invert({ a: 1, b: 1 }));
// Expected: { '1': ['a', 'b'] }

console.log("Test 4 (Triple collision):", invert({ a: 1, b: 1, c: 1 }));
// Expected: { '1': ['a', 'b', 'c'] }

module.exports = invert;