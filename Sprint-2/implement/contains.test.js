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
test("return true when an object has the property name", () => {
    expect(contains({a: 1, b: 2}, "a")).toBe(true);
})

// Given an empty object
// When passed to contains
// Then it should return false
test("returns false on empty object ", () => {
    expect(contains({}, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("return true when pass an object that contains the property name", () => {
    expect(contains({name: "John", age: 30}, "name")).toBe(true);
})

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("return false when pass an object that does not contain the property name", () => {
    expect(contains({id: 12, status: "active"}, "age")).toBe(false);
})

// Given invalid parameters like an array
// When: Checking for a valid array property like 'length' or an index
// Then it should return false or throw an error
test("return false when pass an array instead of an object", () => {
    expect(contains(["Banana"], "length")).toBe(false);
    expect(contains(["Apple"], "0")).toBe(false);
})

// Given a value that is null, undefined, or a primitive (like 123)
// When passed to the contains function
// Then it should return false to prevent errors and ensure only real objects are processed.
test("should return false for null and other non-objects", () => {
  expect(contains(null, "prop")).toBe(false);
  expect(contains(undefined, "prop")).toBe(false);
  expect(contains(123, "toFixed")).toBe(false);
});

// Given: A standard object created with literal notation {}.
// When: It is passed to the 'contains' function looking for a built-in property like "toString".
// Then: It should return false because the object is not the "owner" of that property.
test("Should return false for inherited properties like 'toString'", () => {
  expect(contains({}, "toString")).toBe(false);
});