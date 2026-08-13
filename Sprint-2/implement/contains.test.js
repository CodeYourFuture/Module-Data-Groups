const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

describe("when checking property existence", () => {
  test("should return true if the object contains the property", () => {
    expect(contains({ a: "apple", b: "hill" }, "a")).toBe(true);
  });
  test("should return false if the object does not contain the property", () => {
    expect(contains({ a: "apple", b: "hill" }, "c")).toBe(false);
  });
});

// Given an empty object
// When passed to contains
// Then it should return false
describe("given an empty object", () => {
  test("should return false when passed to contains", () => {
    expect(contains({}, "a")).toBe(false);
  });
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
describe("when given invalid inputs", () => {
  test("should throw an error if the input is not an object", () => {
    expect(() => contains([true, 2, "hill"], "2")).toThrow(
      "Input should be an object"
    );
  });

  test("should throw an error if the input is not an object", () => {
    expect(() => contains(null, "hi")).toThrow("Input should be an object");
  });

  test("should throw an error if the input is not an object", () => {
    expect(() => contains("apple", "a")).toThrow("Input should be an object");
  });
});
