const contains = require('./contains');

describe('contains', () => {
    it('should return false for an empty object', () => {
        expect(contains({}, 'someProperty')).toBe(false);
    });

    it('should return true if the object contains the property', () => {
        expect(contains({ a: 1 }, 'a')).toBe(true);
        expect(contains({ name: 'John', age: 30 }, 'name')).toBe(true);
        expect(contains({ "1": "one"}, "1")).toBe(true) //number as string property name
    });

    it('should return false if the object does not contain the property', () => {
        expect(contains({ a: 1 }, 'b')).toBe(false);
        expect(contains({ name: 'John' }, 'age')).toBe(false);
    });

    it('should handle null and undefined objects gracefully', () => {
        expect(contains(null, 'a')).toBe(false);
        expect(contains(undefined, 'a')).toBe(false);
    });

    it('should handle empty string property names', () => {
        expect(contains({"": 1}, "")).toBe(true);
        expect(contains({a:1}, "")).toBe(false);
    });

    it('should handle non-object inputs gracefully', () => {
        expect(contains(123, 'a')).toBe(false); // Number
        expect(contains("hello", 'a')).toBe(false); // String
        expect(contains([1, 2, 3], 'a')).toBe(false); // Array
        expect(contains(true, 'a')).toBe(false)
        expect(contains(NaN, 'a')).toBe(false)
    });
});
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

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

//enough is enough!


