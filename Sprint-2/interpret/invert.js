// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj.key = value;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
// { key: 1 }

// b) What is the current return value when invert is called with 
//{ key: 2 }

// c) What is the target return value when invert is called with {a : 1, b: 2}
// {"1" : "a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program?
// it returns an array of key-value pairs from an object. 
//it's needed in order to loop through each key-value pairs of an object.

// d) Explain why the current return value is different from the target output
// because line 13 is not written accordingly. The current arrangement always starts with keys and then values.
// Most importantly, there's a bug. Currently, it returns "key" as if it's a key/property name. Refer to (a & b)



// e) Fix the implementation of invert (and write tests to prove it's fixed!)

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}


const sports = {
  soccer: "ball",
  tennis: "racket",
  basketball: "hoopBall",
  baseball: "bat",
  swimming: "goggles",
};

console.log(invert(sports));

// test("when 'invert' passed an object it returns the object with keys & values swapped.", () => {
//     expect(invert(sports)).toEqual({
//       ball: "soccer",
//       racket: "tennis",
//       hoopBall: "basketball",
//       bat: "baseball",
//       goggles: "swimming",
//     });
//   });


