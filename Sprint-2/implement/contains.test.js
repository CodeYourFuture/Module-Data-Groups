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

test("contains on empty object returns false", () => {
    expect(contains({} , "key")).toBe(false);
});

// --------------------------------------------------------------------------------------
// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

test("An object and an existing property name, should return true", () => {
    expect(contains({a:1, b:2, c:3}, "b")).toBe(true);
});

// --------------------------------------------------------------------------------------
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("An object and a non-existent property name, should return false", () => {
    expect(contains({a:1, b:2, c:3}, "d")).toBe(false);
});

// --------------------------------------------------------------------------------------
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

test("number as input, should return false", () => {
    expect(contains(123, "key")).toBe(false);
});

// --------------------------------------------------------------------------------------
// test("invalid parameter (like an array), should return false", () => {
//     expect(contains(["a", "b", "c", 1, 2, 3],"1")).toBe(true);
// })
// test("invalid parameter (like an array), should return false", () => {
//     expect(contains(["a", "b", "c", 1, 2, 3],"a")).toBe(false);
// })
