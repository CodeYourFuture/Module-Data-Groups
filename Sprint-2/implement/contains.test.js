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

// Given an empty object
// When passed to contains
// Then it should return false
//test.todo("contains on empty object returns false");
test("contains on empty object returns false", () => {
    expect(contains({}, "d")).toBe(false);
});
// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("returns true for  existing property", () => {
    expect(contains({ d: 9, v: 11}, "v")).toBe(true);
});
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("returns false for non-existent property", () => {
    expect(contains({ d: 12, h: 5, n: 13 }, "f")).toBe(false);
});
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("returns false for invalid parameters", () => {
    expect(contains([6, 5, 1], "d")).toBe(false);
});

// extra sauce
// Given a string input
// When passed to contains
// Then it should return false
test("returns false for a string input", () => {
    expect(contains("Settle down clown", "t")).toBe(false);
});