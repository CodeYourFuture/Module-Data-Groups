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
test("returns true for existing property and false for non-existing property", () => {
    const obj = { a: 1, b: 2};
    expect(contains(obj, "a")).toBe(true);
    expect(contains(obj, "c")).toBe(false);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("returns false if contains empty object", () => {
    const obj = {};
    expect(contains(obj, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("returns true for existing property", () => {
    const obj = { firstName: "Gina", lastName: "Rogers" };
    expect(contains(obj, "firstName")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("returns false for non-existing property", () => {
    const obj = { firstName: "Gina", lastName: "Rogers" };
    expect(contains(obj, "age")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("handles invalid parameters", () => {
    const arr = [1, 2, 3];
    expect(contains(arr, "0")).toBe(false);
});
