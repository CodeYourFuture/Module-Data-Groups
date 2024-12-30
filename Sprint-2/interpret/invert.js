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

module.exports = invert;
// a) What is the current return value when invert is called with { a : 1 }
       //{key: 1}
// b) What is the current return value when invert is called with { a: 1, b: 2 }
       //{key: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
      //  { "1": "a", "2": "b" } in this case keys become values and values become keys

// c) What does Object.entries return? Why is it needed in this program?
      // Object.entries retruns an array of objcets with key and value ["key":"value"]
// d) Explain why the current return value is different from the target output
   // The current return value is incorrect because the line invertedObj.key = value;
  //  does not swap the acual keys and values .Instead, it sets the literal key "key"
      
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
