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


// a) What is the current return value when invert is called with { a : 1 }
{ "1": "a" }
// b) What is the current return value when invert is called with { a: 1, b: 2 }
{"1": "a", "2": "b"}
// c) What is the target return value when invert is called with {a : 1, b: 2}
{"1" : "a", "2" : "b"}
// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of key-value pairs from the object. It is needed to iterate over both keys and values in the object.
// d) Explain why the current return value is different from the target output
// The current return value is incorrect because the code is assigning the value to the key instead of the key to the value in the inverted object.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)

test("invert swaps keys and values in an object", () => {
  const currentOutput = invert({ x: 10, y: 20 });
  const targetOutput = { "10": "x", "20": "y" };
  
  expect(currentOutput).toEqual(targetOutput);
});

test("invert handles multiple key-value pairs", () => {
  const currentOutput = invert({ a: 1, b: 2, c: 3 });
  const targetOutput = { "1": "a", "2": "b", "3": "c" };
  
  expect(currentOutput).toEqual(targetOutput);
});