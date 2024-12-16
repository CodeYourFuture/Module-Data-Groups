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
test('returns true when the object contains the property', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(contains(obj, 'a')).toEqual(true); // 'a' exists in the object
    expect(contains(obj, 'b')).toEqual(true);// 'b' exists in the object 
    expect(contains(obj, 'd')).toEqual(false);
  });
// Given an empty object
// When passed to contains
// Then it should return false
test.todo("contains on empty object returns false");
test("contains on empty object returns false", () => {
    expect(contains({}, 'a')).toEqual(false); // Expect Boolean, not string
});
// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("given an object with properties and contains an existing property", () => {
    expect(contains({a: 1, b: 2}, 'a')).toEqual(true);
});


// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test('returns false for non-existent property in the object', () => {
    const obj = { a: 1, b: 2, c: 3 }; // Object with properties
    expect(contains(obj, 'd')).toEqual(false); // 'd' does not exist in the object
    expect(contains(obj, 'e')).toEqual(false); // 'e' does not exist in the object
  });
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("given invalid parameters like an array", () => {
    expect(contains([1, 2, 3], 'a')).toEqual(false);
});