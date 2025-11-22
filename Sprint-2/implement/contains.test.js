const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property
*/

// Test 1: Empty object
test("contains on empty object returns false", () => {
  expect(contains({}, "a")).toBe(false);
});

// Test 2: Existing property
test("returns true when the property exists in the object", () => {
  const obj = { a: 1, b: 2 };
  expect(contains(obj, "a")).toBe(true);
});

// Test 3: Non-existent property
test("returns false when the property does not exist in the object", () => {
  const obj = { a: 1, b: 2 };
  expect(contains(obj, "c")).toBe(false);
});

// Test 4: Invalid input - array
test("returns false if input is an array", () => {
  expect(contains([], "a")).toBe(false);
});

// Test 5: Invalid input - null
test("returns false if input is null", () => {
  expect(contains(null, "a")).toBe(false);
});
