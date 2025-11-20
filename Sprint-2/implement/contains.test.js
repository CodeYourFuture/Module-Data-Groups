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
	expect(contains({}, 'a')).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains returns true for existing property", () => {
	expect(contains({a: 1, b: 2}, 'a')).toBe(true);
	expect(contains({x: 10, y: 20}, 'y')).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains returns false for non-existent property", () => {
	expect(contains({a: 1, b: 2}, 'c')).toBe(false);
	expect(contains({x: 10, y: 20}, 'z')).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("contains returns false for invalid parameters", () => {
    const arr = [1, 2, 3];
    arr.extra = "value";              // Add own property to prove arrays are rejected
    expect(contains(arr, 'extra')).toBe(false); // Would be true if implementation wrongly treated arrays as objects

    // Also ensure indexed keys are rejected (array has '0' as own property)
    expect(contains(['x'], '0')).toBe(false);

    expect(contains([], 'a')).toBe(false);
	expect(contains(null, 'a')).toBe(false);
	expect(contains(undefined, 'a')).toBe(false);
	expect(contains(42, 'a')).toBe(false);
	expect(contains("string", 'a')).toBe(false);
});
