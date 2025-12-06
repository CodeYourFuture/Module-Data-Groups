const invert = require("./invert.js");

// Case 1: Normal object inversion
test("invert single-level object", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
});

// Case 2: object with string values
test("invert object with string values", () => {
  expect(invert({ x: "CYF", y: "abc" })).toEqual({ "CYF": "x", "abc": "y" });
});

// Case 3: object with boolean values
test("invert object with boolean values", () => {
  expect(invert({ a: true, b: false })).toEqual({ "true": "a", "false": "b" });
});

// Case 4: object with nested object as value
test("invert object with nested object as value", () => {
  const input = { a: { x: 1 }, b: 2 };
  const expected = { '{"x":1}': "a", "2": "b" };
  expect(invert(input)).toEqual(expected);
});

// Case 5: object with duplicate values 
test("invert object with duplicate values", () => {
  const input = { a: 1, b: 1 };
  const expected = { "1": "b" };
  expect(invert(input)).toEqual(expected);
});

// Case 6: empty object
test("invert empty object", () => {
  expect(invert({})).toEqual({});
});

// Case 7: invalid inputs (non-object)
test("throws error for non-object input", () => {
  expect(() => invert(null)).toThrow("Input must be an object");
  expect(() => invert(42)).toThrow("Input must be an object");
  expect(() => invert("foo")).toThrow("Input must be an object");
  expect(() => invert([1,2,3])).toThrow("Input must be an object");
});

// In invert.test.js test cases tested.