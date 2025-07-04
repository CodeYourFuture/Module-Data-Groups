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
describe("find contains", () => {
  // Given a contains function
  // When passed an object and a property name
  // Then it should return true if the object contains the property, false otherwise
  it("the object contains the property, returns true", () => {
    const list = { a: 1, b: 2 };
    let prop = "a";
    const result = contains(list, prop);
    expect(result).toEqual(true);
  });

  it("the object does not contain the property, returns false", () => {
    const list = { a: 1, b: 2 };
    let prop = "c";
    const result = contains(list, prop);
    expect(result).toEqual(false);
  });

  // Given an empty object
  // When passed to contains
  // Then it should return false
  it("contains on empty object returns false", () => {
    const list = {};
    let prop = "a";
    const result = contains(list, prop);
    expect(result).toEqual(false);
  });

  // Given an object with properties
  // When passed to contains with an existing property name
  // Then it should return true
  it("the property is contained returns true", () => {
    const list = { x: 10, y: 20 };
    let prop = "y";
    const result = contains(list, prop);
    expect(result).toEqual(true);
  });

  // Given an object with properties
  // When passed to contains with a non-existent property name
  // Then it should return false
  it("contains returns false when the property does not exist", () => {
    const list = { x: 10, y: 20 };
    let prop = "z";
    const result = contains(list, prop);
    expect(result).toEqual(false);
  });

  // Given invalid parameters like an array
  // When passed to contains
  // Then it should return false or throw an error
  it("returns false when the input is not an object (array)", () => {
    const list = ["a", "b", "c"];
    let prop = "a";
    const result = contains(list, prop);
    expect(result).toEqual(false);
  });
});
