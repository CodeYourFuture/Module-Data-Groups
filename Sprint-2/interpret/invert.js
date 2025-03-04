// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

// a) What is the current return value when invert is called with { a : 1 }
// When calling invert({ a: 1 }), it will return { key: 1 } because the string "key" is being assigned instead of using the key value.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// { key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// An array of key-value pairs, e.g., [['a', 1], ['b', 2]].
// In the invert function, Object.entries is used to loop over the original object's key-value pairs so we can swap them. It is needed because it provides an easy way to destructure the keys and values and iterate over them.

// d) Explain why the current return value is different from the target output
// The function mistakenly assigns "key" as the property name instead of using value as the key.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
function invert(obj) {
  const invertedObj = {};
  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }
  return invertedObj;
}

console.log(invert({ a: 1 })); 
console.log(invert({ a: 1, b: 2 })); 
console.log(invert({ x: 10, y: 20 }));

