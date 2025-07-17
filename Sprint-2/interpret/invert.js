// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    const val = String(value); 
    if (invertedObj[val] !== undefined) {
      // If already exists, push to array
      if (!Array.isArray(invertedObj[val])) {
        invertedObj[val] = [invertedObj[val]];
      }
      invertedObj[val].push(key);
    } else {
      invertedObj[val] = key;
    }
  }
  return invertedObj;
}



// a) What is the current return value when invert is called with { a : 1 }
console.log(invert({ a: 1 }));         // Expected: { "1": "a" }
// b) What is the current return value when invert is called with { a: 1, b: 2 }
console.log(invert({ a: 1, b: 2 }));   // Expected: { "1": "a", "2": "b" }
// c) What is the target return value when invert is called with {a : 1, b: 2}
// With the function, calling it with { a: 1, b: 2 } will return { '1': 'a', '2': 'b' }.
// invertedObj[value] = key; iterates through the input object's key-value pairs. In each pair, it assigns the value from the original object as the new key in invertedObj, and the original key as the new value. Thus, { a: 1, b: 2 } becomes { '1': 'a', '2': 'b' } by swapping the roles of keys and values.
// the same with b)

// d) Explain why the current return value is different from the target output
console.log(invert({ x: 10, y: 20 })); // Expected: { "10": "x", "20": "y" }
// The wrong code always used "key" as the new property name, ignoring the actual key from the original object. The correct way uses the original value as the new key and the original key as the new value, thus inverting them.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)


console.log(invert({ a: 1 }));         // Expected: { "1": "a" }
console.log(invert({ a: 1, b: 2 }));   // Expected: { "1": "a", "2": "b" }
console.log(invert({ x: 10, y: 20 })); // Expected: { "10": "x", "20": "y" }
console.log(invert({}));
