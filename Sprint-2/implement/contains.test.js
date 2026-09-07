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
describe("contains function", () => {
  // Given a contains function
  // When passed an object and a property name
  // Then it should return true if the object contains the property, false otherwise
  it("given an object and a property name, returns true if the object contains the property, false otherwise", () => {
    expect(contains({ first: 1, second: 2 }, "first")).toEqual(true);
    expect(contains({ first: 1, second: 2 }, "third")).toEqual(false);
  });
  // Given an empty object
  // When passed to contains
  // Then it should return false
  it("contains on empty object returns false", () => {
    expect(contains({}, "a")).toBeFalsy();
  });

  // Given an object with properties
  // When passed to contains with an existing property name
  // Then it should return true

  it("given an object and a property name, returns true if the object contains the property", () => {
    expect(contains({ a: 1, b: 2 }, "a")).toBeTruthy();
  });
  // Given an object with properties
  // When passed to contains with a non-existent property name
  // Then it should return false
  it("given an object and a property name, returns false if the object does not contain the property", () => {
    expect(contains({ a: 1, b: 2 }, "c")).toBeFalsy();
  });
  // Given invalid parameters like an array
  // When passed to contains
  // Then it should return false or throw an error
  it("given and invalid parameters, returns false or throws an error", () => {
    expect(() => contains([1, 2, 3], 3)).toThrow("Invalid parameters");
    expect(contains({ a: 100, b: 200 }, [100, 200])).toBeFalsy();
  });
});
