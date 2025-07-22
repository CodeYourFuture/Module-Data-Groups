const invert = require("./invert.js");


// a) What is the current return value when invert is called with { a : 1 }
test("invert returns correct inverted object", () => {
  const input = { a: 1, b: 2 };
  const expectedOutput = { '1': 'a', '2': 'b' };
  expect(invert(input)).toEqual(expectedOutput);
});

// b) What is the current return value when invert is called with { a: 1, b: 2 }
test("invert with numeric values returns string keys", () => {
  const input = { a: 1, b: 2 };
  const expectedOutput = { '1': 'a', '2': 'b' };
  expect(invert(input)).toEqual(expectedOutput);
});

// c) What is the target return value when invert is called with {a : 1, b: 2}
test("invert with string values returns correct inverted object", () => {
  const input = { a: '1', b: '2' };
  const expectedOutput = { '1': 'a', '2': 'b' };
  expect(invert(input)).toEqual(expectedOutput);
});

// c) What does Object.entries return? Why is it needed in this program?
test("Object.entries returns key-value pairs", () => {
  const obj = { a: '1', b: '2' };
  const entries = Object.entries(obj);
  expect(entries).toEqual([['a', '1'], ['b', '2']]);
});
// d) Explain why the current return value is different from the target output
test("invert handles numeric values as strings", () => {
  const input = { a: 1, b: 2 };
  const expectedOutput = { '1': 'a', '2': 'b' };
  expect(invert(input)).toEqual(expectedOutput);
});

// e) Fix the implementation of invert (and write tests to prove it's fixed!)
test("invert handles empty object", () => {
  const input = {};
  const expectedOutput = {};
  expect(invert(input)).toEqual(expectedOutput);
});