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

console.log(invert({ a: 1 })); // Expected: { "1": "a" }
console.log(invert({ a: 1, b: 2 })) // Expected: { "1": "a", "2": "b" }

// a) What is the current return value when invert is called with { a : 1 }
// Answer: It is incorrect because it is setting invertedObj.key = value 
//instead of using the key variable correctly. 
//The value for the key key is being assigned as the string "key".
//If we call invert({ a: 1 }), the current implementation will return: {key: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Answer: when calling invert({ a: 1, b: 2 }), the current implementation will return:{ key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// Answer: The invert function should swap the keys and values, so for the input { a: 1, b: 2 }, 
//the target output should be: { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
//Answer: Object.entries() returns an array of key-value pairs from the object. 
//Each pair is an array, where the first element is the key and the second element is the value. 
//This is useful in this program because we need to iterate over the object’s key-value pairs and 
//swap them (keys become values and vice versa).

//For example:
//Object.entries({ a: 1, b: 2 })
// Returns: [['a', 1], ['b', 2]]

// d) Explain why the current return value is different from the target output
// Answer: the string "key" as a literal key in the invertedObj, which means the object always 
//gets a property named "key" rather than using the actual key from the input object.
//Instead, the correct approach should involve using key as the key in the invertedObj and value as the 
//value, like this: invertedObj[value] = key;
// invertedObj[value] = key "change to" => invertedObj[value] = key;


// e) Fix the implementation of invert (and write tests to prove it's fixed!)
//invertedObj[value] = key; // Swap the key and value in code above line 13