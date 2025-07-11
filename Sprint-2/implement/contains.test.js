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
describe("edge cases of the contains function", () => {
  test("contains an object and property and returns true", () => {
    const currentOutput = contains({ property: "value" }, "property");
    const targetOutput = true;
    expect(currentOutput).toEqual(targetOutput);
  });

  // Given an empty object
  // When passed to contains
  // Then it should return false
  test("contains on empty object returns false", () => {
    const currentOutput = contains({}, "property");
    const targetOutput = false;
    expect(currentOutput).toEqual(targetOutput);
  });

  // Given an object with properties
  // When passed to contains with a non-existent property name
  // Then it should return false
  test("contains an object and property and returns true", () => {
    const currentOutput = contains({ property: "value" }, "lava");
    const targetOutput = false;
    expect(currentOutput).toEqual(targetOutput);
  });

  // Given invalid parameters like an array
  // When passed to contains
  // Then it should return false or throw an error
  test("contains an object and property and returns true", () => {
    const currentOutput = contains([], "property");
    const targetOutput = false;
    expect(currentOutput).toEqual(targetOutput);
  });

  // Don't forget to fill in the expect return values
  test("contains a null instead of object and property and returns false", () => {
    const currentOutput = contains(null, "foo");
    const targetOutput = false;
    expect(currentOutput).toEqual(targetOutput);
  });

  // Don't forget to fill in the expect return values
  test("contains an array instead of object and property and returns false", () => {
    const currentOutput = contains([6, 6, 7], "1");
    const targetOutput = false;
    expect(currentOutput).toEqual(targetOutput);
  });

  // Don't forget to fill in the expect return values
  test("contains an string instead of object and property and returns false", () => {
    const currentOutput = contains("foo", "foo");
    const targetOutput = false;
    expect(currentOutput).toEqual(targetOutput);
  });
});
