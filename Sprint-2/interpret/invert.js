// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("input has to be an object");
  }
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}
console.log(invert({ a: 1, b: 2 }));
// a) What is the current return value when invert is called with { a : 1 }
//{key:1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//{key:2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
//{1:a, 2:b}

// c) What does Object.entries return? Why is it needed in this program?
//Object.entries() returns an array of key-value pairs from an object.
//We need it in this program to loop through the object's properties and access both the keys and values, so we can swap them.

// d) Explain why the current return value is different from the target output
//The current output is different because dot notation creates a property called "key" instead of using the variable.
//Each iteration overwrites the previous value, and the original keys and values are not swapped.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
//fixed, should I make a new file with tests or just add them below as I did?

test("when given single input should invert key and value eg. 'a:1', return '1:a' ", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("when given multiple inputs should invert key and values correctly ", () => {
  expect(invert({ a: 1, b: 3 })).toEqual({ 1: "a", 3: "b" });
});

test("when given input type of number, should throw error", () => {
  expect(() => invert(22)).toThrow(/^input has to be an object$/);
});
test("when given input type of string, should throw error", () => {
  expect(() => invert("22")).toThrow(/^input has to be an object$/);
});
test("when given input with different types of than object, should throw error", () => {
  expect(() => invert([22, 33, "ppp"])).toThrow(/^input has to be an object$/);
});
