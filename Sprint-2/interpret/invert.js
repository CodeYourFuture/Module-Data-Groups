// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj [value] = key;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
//the current return value is:{ key: 1 },because key is treated as a literal string not the actual variable value.
// b) What is the current return value when invert is called with { a: 1, b: 2 }
//it is the same issue:{ key: 2 }
// c) What is the target return value when invert is called with {a : 1, b: 2}
//the target return value is:{ "1": "a", "2": "b" }-Each value becomes a key, and each key becomes a value.
// c) What does Object.entries return? Why is it needed in this program?
//the Object.entries return:[["a", 1], ["b", 2]]- converts an object into an array.It is needed because it lets us work with the key and value directly 
// d) Explain why the current return value is different from the target output
//the problem is in here:invertedObj.key = value; This This sets a property named "key" instead of using the actual key’s value.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
//fixed implementation:invertedObj[value] = key
//test cases:

test("inverts a simple object", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
});


test("inverts an object with one key-value pair", () => {
  expect(invert({ x: 10 })).toEqual({ "10": "x" });
});


test("inverts an empty object to an empty object", () => {
  expect(invert({})).toEqual({});
});


test("inverts an object with string values", () => {
  expect(invert({ hello: "world", foo: "bar" })).toEqual({
    world: "hello",
    bar: "foo",
  });
});


test("inverts an object with duplicate values, keeping the last key", () => {
  expect(invert({ a: 1, b: 1 })).toEqual({ "1": "b" });
});

test("throws an error when given a non-object input", () => {
  expect(() => invert("not an object")).toThrow("Input must be an object");
});