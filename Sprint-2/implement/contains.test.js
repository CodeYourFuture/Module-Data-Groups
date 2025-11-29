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

test("given an object contains a property name, returns true", () => {
    const input = { a: 1, b: 2 };
    const propertyName = "a";
    expect(contains(input, propertyName)).toBe(true);
});

// Given an empty object
// When passed to contains
// Then it should return false

test("given an empty object, returns false", () => {
    const input = {};
    const propertyName = "a";
    expect(contains(input, propertyName)).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

test("given an object contains a property name, returns true", () => {
    const input = { a: 1, b: 2 };
    const propertyName = "a";
    expect(contains(input, propertyName)).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("given an object does not contain a property name, returns false", () => {
    const input = { a: 1, b: 2 };
    const propertyName = "c";
    expect(contains(input, propertyName)).toBe(false);
});


// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

test("given invalid parameters like an array, returns false", () => {
    const input = [1, 2, 3];     
    const propertyName = "0";    
    expect(contains(input, propertyName)).toBe(false);
});