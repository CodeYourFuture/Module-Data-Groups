// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

// function invert(obj) {
//   const invertedObj = {};

//   for (const [key, value] of Object.entries(obj)) {
//     invertedObj.key = value;
//   }

//   return invertedObj;
// }

// a) What is the current return value when invert is called with { a : 1 }
      // {key:1}
// --------------------------------------------------------------------------------------
// b) What is the current return value when invert is called with { a: 1, b: 2 }
      // {key:2}
// --------------------------------------------------------------------------------------
// c) What is the target return value when invert is called with {a : 1, b: 2}
      // {1 : a , 2: b}
// --------------------------------------------------------------------------------------
// c) What does Object.entries return? Why is it needed in this program?
      // It convert the object into an array of key-value pairs, and return the array.
      // It's needed to iterate over key-value pairs of the object.
// --------------------------------------------------------------------------------------
// d) Explain why the current return value is different from the target output
      // As prep said: "We can’t use dot syntax if we don’t know what the name of the key is going to be"
      // So that in this code, invertedObj.key set a property "key" instead of using value as key name.
// --------------------------------------------------------------------------------------
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
      // We need too correct invertedObj.key = value, with invertedObj[value] = key. 
      
      function invert(obj) {
        const invertedObj = {};

        for (const [key, value] of Object.entries(obj)) {
          invertedObj[value] = key;
        }

        return invertedObj;
      };


console.log(invert({x : 10, y : 20}))