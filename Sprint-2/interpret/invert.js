// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  if (obj !== null && !Array.isArray(obj) && typeof obj === "object") {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value != "string" && typeof value !== "number") {
        throw new Error(
          "error invalid input entered, expecting an object to have only strings as values"
        );
      }

      invertedObj[value] = key;
    }
  } else {
    throw new Error("error invalid input entered, expecting an object");
  }

  return invertedObj;
}

module.exports = invert;

// a) What is the current return value when invert is called with { a : 1 }
//it returns a string describing the object.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//it aso returns the type of the object.

// c) What is the target return value when invert is called with {a : 1, b: 2}
//the target return value is {"1": "a", "2": "b"}.

// c) What does Object.entries return? Why is it needed in this program?
//it returns an array made up of arrays of the original objects key - value pairs.
//it allows us to unpack the contents of the object into an array which can then be used to create the new object

// d) Explain why the current return value is different from the target output
//because we used dot notation to assign a value to our key, this creates a property called key
//and assigns it a value. we want our key to get its name from a variable so we need to use bracket notation.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
//we can fix it by using invertedObj[value] = key.
