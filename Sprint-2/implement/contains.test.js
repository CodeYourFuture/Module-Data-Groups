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
test('Given an empty object, it should return false', () => {
    const obj = {}
    expect(contains(obj, 'anykey')).toEqual(false)
})

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test('passing an obj and the key we looking for, it should return true', () => {
    const obj = {a: 1, b: 2};
    expect(contains({a: 1, b: 2}, 'c')).toBe(true)
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("When passed to contains with a non-existent property name, it should return false", () => {
    const obj = {a: 1, b: 2};
    expect(contains({a: 1, b: 2}), 'c').toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("Given invalid parameters like an array, it should return false or throw an error", () => {
    const list = [1, 2, 3]
    expect(contains(list, "key")).toThrow("Invalid input")
});