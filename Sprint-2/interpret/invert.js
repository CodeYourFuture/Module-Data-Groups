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

// a) What is the current return value when invert is called with { a : 1 }
//{ key: 1 }
// b) What is the current return value when invert is called with { a: 1, b: 2 }
//{ key: 2 }
// c) What is the target return value when invert is called with {a : 1, b: 2}
//{"1": "a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries gives an array of [key, value] pairs.
// d) Explain why the current return value is different from the target output
// invertedObj.key sets a property literally called "key". We need to use the variable key as the dynamic property name. and we need to change "key" to "value" and "value" to "key".
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
console.assert(
  JSON.stringify(invert({ a: 1, b: 2 })) === JSON.stringify({ "1": "a", "2": "b" }),
  "multiple keys test failed"
);
console.assert(
  JSON.stringify(invert({ x: "hello", y: "world" })) === JSON.stringify({ "hello": "x", "world": "y" }),
  "string cases test failed"
);
console.assert(
  JSON.stringify(invert({})) === JSON.stringify({}),
  "empty test failed"
);
console.log("All tests passed!");
