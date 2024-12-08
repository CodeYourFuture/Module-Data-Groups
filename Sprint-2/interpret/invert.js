// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

 for (let [key,value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }
  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
//In this implementation, invertedObj.key = value; always sets the key of the new object to the string key (literally) 
//instead of using the key variable. So, when the input is { a: 1 }, the result will be:

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//This happens because, as explained earlier, key is being used as the literal key in the invertedObj, 
//so the second entry (b: 2) overwrites the first.

// c) What is the target return value when invert is called with {a : 1, b: 2}
//The desired behavior is that the keys and values should be swapped. Thus, the expected output when invert is called with { a: 1, b: 2 } should be:
//{ "1": "a", "2": "b" }

// d) What does Object.entries return? Why is it needed in this program?
//Object.entries(obj) returns an array of an object's own enumerable string-keyed property [key, value] pairs.

// e) Explain why the current return value is different from the target output
//This line is always setting the key of invertedObj to the string key. 
//The correct approach is to dynamically use the value of key (the variable from the for...of loop) as the new key in invertedObj.

// f) Fix the implementation of invert (and write tests to prove it's fixed!)
