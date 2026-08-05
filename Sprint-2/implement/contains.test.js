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
 describe("contains", () => {
  test("returns true if the object contains the property", () => {
    expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
    expect(contains({ a: 1, b: 2 }, "b")).toBe(true);
    
  });
  test("returns false when the object does not contain the property", () => {
    expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
    expect(contains({ a: 1, b: 2 }, "d")).toBe(false);
  });

// Given an empty object
// When passed to contains
// Then it should return false
  test("returns false for an empty object", () => {
    expect(contains({}, "a")).toBe(false);
  });
});



describe("contains", () => {
  test("returns false if the object is missing", () => {
    expect(contains({a: 1, b:2 })).toBe(false);
  });

  test("returns false for an empty object", () => {
    expect(contains({}).toBe(false);
  });
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("returns true if the object contains the existing property name", () => {
    expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
    expect(contains({ a: 1, b: 2 }, "b")).toBe(true);
    expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
  });


// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("returns false when given an invalid object", () => {
    expect(contains(null, "a")).toBe(false);
    expect(contains(undefined, "a")).toBe(false);
     });
     
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("returns false or throw an error when given an invalid object", () => {
    expect(contains(null, "a")).toBe(false);
    expect(contains(undefined, "a")).toBe(false);
  });