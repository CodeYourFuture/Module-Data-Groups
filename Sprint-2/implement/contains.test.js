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

test("Should return true when the object contains the property", () => {
    let numbers = { a: 1, b: 2, c: 3 };
    expect(contains(numbers, 'a')).toBe(true); // 'a' is a property of the object
});
// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

test("Given an empty object, should returns false", () => {
    const emptyObject = {}
    expect(contains(emptyObject, 'key')).toBe(false);
} );
// Given an empty object
// When passed to contains
// Then it should return false

test("Should return true when the object contains the property", () => {
    let numbers = { a: 1, b: 2, c: 3 };
    expect(contains(numbers, 'a')).toBe(true); // 'a' is a property of the object
});
// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

test("Should return false when the object does not contains the property", () => {
    let numbers = { d: 4, e: 5, f: 6 };
    expect(contains(numbers, 'a')).toBe(false); // 'a' is a property of the object
});
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("Should return false when invalid parameters like an array are passed to contains", () => {
    expect(contains([], 'a')).toBe(false); // array is not a valid object
    expect(contains(null, 'a')).toBe(false); // null is not a valid object
    expect(contains(42, 'a')).toBe(false); // number is not a valid object
    expect(contains("string", 'a')).toBe(false); // string is not a valid object
    expect(contains(true, 'a')).toBe(false); // boolean is not a valid object
});
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
 