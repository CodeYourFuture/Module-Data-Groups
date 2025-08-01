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
describe('conatains function',() => {
// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

test('should return true if the object contains the property', () => {
        const testObject = { a: 1, b: 2 };
        expect(contains(testObject, 'a')).toBe(true);
        expect(contains(testObject, 'b')).toBe(true);
        expect(contains({ surname: 'madin', date_of_birth: 1986 }, 'surname')).toBe(true)
});
// Given an empty object
// When passed to contains
// Then it should return false
test("should return false when passed an empty object", () => {
        expect(contains({}, 'surname')).toBe(false);
        expect(contains({}, 'anyProperty')).toBe(false);
    });

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test('should return true if the object contains the property', () => {
        const testObject = { a: 1, b: 2 };
        expect(contains(testObject, 'a')).toBe(true);
        expect(contains(testObject, 'b')).toBe(true);
        expect(contains({ first_name: 'john', date_of_birth: 1986 }, 'first_name')).toBe(true)
});
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test('should return false if the object does not contain the property', () => {
        const testObject = { a: 1, b: 2 };
        expect(contains(testObject, 'c')).toBe(false);
        expect(contains(testObject, 'x')).toBe(false);
        expect(contains({ surname: 'madin', date_of_birth: 1986 }, 'place_of_birth')).toBe(false);
});
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

test('should throw an error for invalid parameters like an array', () => {
        expect(() => contains([], 'surname')).toThrow('Invalid parameter: The first argument must be a non-null, non-array object.')

        expect(() => contains(null, 'first_name')).toThrow('Invalid parameter: The first argument must be a non-null, non-array object.')
        expect(() => contains(123, 'first_name')).toThrow('Invalid parameter: The first argument must be a non-null, non-array object.');

        // Test with undefined
        expect(() => contains(undefined, 'surname')).toThrow('Invalid parameter: The first argument must be a non-null, non-array object.');
})

});