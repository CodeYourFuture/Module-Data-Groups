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
test("When passed an object and a property name, should return true if object contains the property", () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, "a")).toBe(true);
});

// Given an empty object
// When passed to contains
// Then it should return false
test('should return false for an empty object', () => {
    const obj = {};
    expect(contains(obj, 'a')).toBe(false);  // No keys in the empty object
});

//test.todo("contains on empty object returns false");
test('should return false if the object does not contain the key', () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, 'c')).toBe(false); // Key 'c' does not exist in the object
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("Given an object with properties, should return true if the property exists", () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, 'a')).toBe(true); // 'a' exists
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("Given an object with properties, should return false for a non-existent property", () => {
    const obj = { a: 1, b: 2 };
    expect(contains(obj, 'c')).toBe(false); // 'c' does not exist
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("Given an array or non-object type, should return false", () => {
    expect(contains(["a", "b", "c"], "a")).toBe(false); // Arrays are not objects
    expect(contains(123, "a")).toBe(false);  // Non-object primitive should return false
    expect(contains(null, "a")).toBe(false);  // null is not an object
    expect(contains(undefined, "a")).toBe(false);  // undefined is not an object
});
