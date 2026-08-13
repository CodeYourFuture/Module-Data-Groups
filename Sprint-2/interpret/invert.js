// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}
function invert(obj) {
  const inverted = {};
  for (const [key, value] of Object.entries(obj)) {
    const v = String(value);
    (inverted[v] = inverted[v] || []).push(key);
  }
  return inverted;
}
    

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
// {"1":"a"}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// {"1":"a", "2":"b"}

// c) What is the target return value when invert is called with {a : 1, b: 2}
// the intended result is -> {"1":"a","2":"b"} (same as the as the current output)

// c) What does Object.entries return? Why is it needed in this program?
// makes a list of pairs from the object: [[key1, value2], [key2, value2]]
// it's needed so that the code can look at the key and value together in each loop and build the swapped object.

// d) Explain why the current return value is different from the target output
// In the examples shown, it matches the expectation. but: values are turned into strings when used as keys (so 1 becomes "1").


// e) Fix the implementation of invert (and write tests to prove it's fixed!)
