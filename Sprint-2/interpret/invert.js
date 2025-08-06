// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  // 〰️ We should use Object.entries to get key-value pairs and swap them
  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key; // 〰️ Swap the key and value
  }

  return invertedObj;
}

console.log(invert({x : 10, y : 20}));

// a) What is the current return value when invert is called with { a : 1 }
// 〰️ The current implementation has a mistake when trying to swap keys and values. Specifically, it uses invertedObj.key = value;, which means it's always assigning the value to the property key of invertedObj. 
// 〰️ This is wrong because we want the key to be the new value and the value to be the new key.
// 〰️ When the current function is called with { a : 1 }:
// 〰️ The loop would run once with key = 'a' and value = 1.
// 〰️ The code would execute invertedObj.key = 1, which creates a key key with value 1, and thus the result is { key: 1 }.
// 〰️So, the current return value for { a : 1 } is: { "key": 1 }

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// 〰️ When we call invert({ a: 1, b: 2 }) with the current code:
// 〰️ The first iteration would set invertedObj.key = 1, resulting in { key: 1 }.
// 〰️ The second iteration would also try to assign to invertedObj.key = 2, which overwrites the previous key-value pair, so the final result is { key: 2 }.
// 〰️ The current return value for { a: 1, b: 2 } is: { "key": 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// 〰️ The target return value should swap the keys and values, meaning the key a should become 1 and the key b should become 2. So the expected output for { a: 1, b: 2 } is: { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// 〰️ Object.entries returns an array of key-value pairs from an object. For example:
// 〰️ Object.entries({ a: 1, b: 2 }) would return [["a", 1], ["b", 2]].
// 〰️ It is used in the program to loop over each key-value pair of the object. Without it, there would be no easy way to access both the key and the value at the same time inside the loop.

// d) Explain why the current return value is different from the target output
// 〰️ The current return value is incorrect because the code mistakenly assigns value to the key property of the invertedObj. It does not actually swap the key and value. Instead of using invertedObj.key = value;, we should use invertedObj[value] = key; to properly swap the key-value pairs.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
// 〰️ Tests to prove it's fixed
console.log(invert({ a: 1 }));           // 〰️ Expected output: { "1": "a" }
console.log(invert({ a: 1, b: 2 }));     // 〰️ Expected output: { "1": "a", "2": "b" }
console.log(invert({ x: 10, y: 20 }));   // 〰️ Expected output: { "10": "x", "20": "y" }
