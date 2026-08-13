// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  // Validate input type
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) {
    throw new Error("Input must be an object");
  }

  const entries = Object.entries(obj);
  if (entries.length === 0) return {};

  // take only the values
  const values = entries.map(([_, v]) => v);

  // Detect duplicate values
  const hasDuplicate = new Set(values).size !== values.length;
  if (hasDuplicate) {
    throw new Error("Values cannot be duplicated");
  }

  const inverted = {};

  for (const [key, value] of entries) {
    // Validate key and value types
    if (
      (typeof key !== "string" && typeof key !== "number") ||
      (typeof value !== "string" && typeof value !== "number")
    ) {
      throw new Error("Keys and values must be a string or a number");
    }

    inverted[value] = key;
  }

  return inverted;
}
module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// the current value is 1
// b) What is the current return value when invert is called with { a: 1, b: 2 }
// the current return value at this call is 2
// c) What is the target return value when invert is called with {a : 1, b: 2}
// the target return value at this call is to supposed to be 'b'
// d) What does Object.entries return? Why is it needed in this program?
// Object.entries is used because both key and value are needed to be returned from the loop
// e) Explain why the current return value is different from the target output
// it's because the code in the line 13 is only returning single literal property named "key" on every loop iteration, so each assignment overwrites the previous one and the final object ends up with { key: 2 } but the intended inverted output requires using the loop variables as property names (dynamic keys) so each iteration creates a distinct property (for example invertedObj[value] = key), producing separate entries like { 1: 'a', 2: 'b' } instead of repeatedly writing to the same "key" property which the current function is doing
// f) Fix the implementation of invert (and write tests to prove it's fixed!)
// Above is the fixed function
