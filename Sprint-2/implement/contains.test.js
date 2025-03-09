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
test("contains on object with property returns true", () => {
    const obj = { a: 1, b: 2 };
    const prop = "a";
    expect(contains(obj, prop)).toBe(true);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("is should return false when an empty object is passed into the contains function", ()=>{
    const obj = {};
    const prop = "a";
    expect(contains(obj, prop)).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains on object with property returns true", () => {
    const obj = { a: 1, b: 2 };
    const prop = "b";
    expect(contains(obj, prop)).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains on object with property returns false", () => {
    const obj = { a: 1, b: 2 };
    const prop = "c";
    expect(contains(obj, prop)).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("contains on object with property returns false", () => {
    const obj = [1, 2, 3];
    const prop = "a";
    expect(contains(obj, prop)).toBe(false);
});