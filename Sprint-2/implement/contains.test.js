const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'

E.g. contains([1, 2, 3], 'a') throws Error("contains requires an object")
as an array isn't an object
*/

// Acceptance criteria:

// Given an empty object
// When passed to contains
// Then it should return false
describe("contains", () => {
  test("given an empty object, returns false", function () {
    const input = contains({}, "");
    const currentOutput = input;
    const targetOutput = false;

    expect(currentOutput).toEqual(targetOutput);
  });
  // Given a contains function
  // When passed an object and a property name
  // Then it should return true if the object contains the property, false otherwise
  test("given an object, returns true as the object contains a key of 'a'", function () {
    const input = contains({ a: 1, b: 2 }, "a");
    const currentOutput = input;
    const targetOutput = true;

    expect(currentOutput).toEqual(targetOutput);
  });
  // Given an object with properties
  // When passed to contains with a non-existent property name
  // Then it should return false
  test("given an object, returns true as the object contains a key of 'a'", function () {
    const input = contains({ a: 1, b: 2 }, "c");
    const currentOutput = input;
    const targetOutput = false;

    expect(currentOutput).toEqual(targetOutput);
  });
  // Given a value that isn't an object - an array, a string, a number,
  // null, or no argument at all
  // When passed to contains
  // Then it should throw Error("contains requires an object")
  // (careful: typeof [] and typeof null are both "object")
  it("throws when given an array containing a value that isn't an object", () => {
    expect(() => contains(["banana"])).toThrow(
      new Error("contains requires an object")
    );
  });
  it("throws when given an array containing a value that isn't an object", () => {
    expect(() => contains(123)).toThrow(
      new Error("contains requires an object")
    );
  });

  it("throws when given an array containing a value that isn't an object", () => {
    expect(() => contains(null)).toThrow(
      new Error("contains requires an object")
    );
  });

  it("throws when given an array containing a value that isn't an object", () => {
    expect(() => contains()).toThrow(new Error("contains requires an object"));
  });

  it("throws when given an empty array", () => {
    expect(() => contains([])).toThrow(
      new Error("contains requires an object")
    );
  });
});
