const contains = require("./contains.js");

// Given an empty object
// When passed to contains
// Then it should return false
test("returns false for an empty object", () => {
  const currentOutput = contains({});
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("returns true when the property exists", () => {
  const currentOutput = contains({ a: 1, b: 2 }, "a");
  const targetOutput = true;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("returns false when the property does not exist", () => {
  const currentOutput = contains({ a: 1, b: 2 }, "c");
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array
// When passed to contains
// Then it should throw an error
test("throws an error when passed an array", () => {
  expect(() => contains([1, 2, 3], "a")).toThrow(
    new Error("contains requires an object")
  );
});

// Given a string
// When passed to contains
// Then it should throw an error
test("throws an error when passed a string", () => {
  expect(() => contains("hello", "a")).toThrow(
    new Error("contains requires an object")
  );
});

// Given a number
// When passed to contains
// Then it should throw an error
test("throws an error when passed a number", () => {
  expect(() => contains(42, "a")).toThrow(
    new Error("contains requires an object")
  );
});

// Given null
// When passed to contains
// Then it should throw an error
test("throws an error when passed null", () => {
  expect(() => contains(null, "a")).toThrow(
    new Error("contains requires an object")
  );
});

// Given no argument
// When passed to contains
// Then it should throw an error
test("throws an error when passed no argument", () => {
  expect(() => contains()).toThrow(new Error("contains requires an object"));
});
