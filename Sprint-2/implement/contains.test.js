const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contain a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

// Given an empty object
// When passed to contains
// Then it should return false

test("contains an empty object returns false", () => {
  expect(contains({}, "a")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

test("contains array-like object,invalid object and null  returns false",() => {
    expect(contains([], "a")).toBe(false);
    expect(contains(123, "a")).toBe(false);
    expect(contains(null, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("returns true for existent property", () => {
    const obj = {a: 1, b: 2}
    expect(contains(obj, "a")).toBe(true);   
});



// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("returns false for non existent properties", () => {
    const obj1= {a: 1, b:2}
    expect(contains("c")).toBe(false);
});






