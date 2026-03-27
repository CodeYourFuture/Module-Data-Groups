// a) What is the current return value when invert is called with { a : 1 }
// {"1": "a"}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// {"1": "a", "2": "b"}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// {"1": "a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program?
// It returns an array of [key, value] pairs. It is needed to loop through both keys and values at the same time.

// d) Explain why the current return value is different from the target output
// The original code used 'invertedObj.key = value', which literally created a property named "key". 
// It also didn't handle collisions, so values with the same key would overwrite each other.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    // We use [value] for dynamic keys. 
    // We check if the key exists to handle collisions by creating an array.
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
console.log("Test 2 (No duplicates):", invert({ x: 10, y: 20 })); 
console.log("Test 3 (Collision):", invert({ a: 1, b: 1 })); 
console.log("Test 4 (Triple collision):", invert({ a: 1, b: 1, c: 1 }));

module.exports = invert;