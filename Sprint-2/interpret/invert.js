
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
    //{ '1': 'a', '2': 'b' }
// c) What does Object.entries return? Why is it needed in this program?
    //Object.entries()=>method returns an array of the key/value pairs of an object.
    //because we need to get the pairs of key and value to swap the two and get new object
// d) Explain why the current return value is different from the target output
    /* The current return value is different from the target output because we didn't
      use square brackets [] around key to use the variable’s value as the property name.So in our example it always assigns value to the property named literally "key" — not the variable key’s content.
*/

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
module.exports = invert