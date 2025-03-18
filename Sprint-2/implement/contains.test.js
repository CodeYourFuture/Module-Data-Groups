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

describe('contains', () => {
    test('Given a contains function', () => {
        expect(contains({a: 1, b: 2}, "a")).toEqual(true)
    });

    test('Given an empty object', () => {
        expect(contains({}, "a")).toEqual(false)
    });
    
    
    test('Given an object with properties', () => {
        expect(contains({a: 1, b: 2}, "a")).toEqual(true)
    });

    
    test('Given invalid parameters like an array', () => {
        expect(contains([1,2,3], "a")).toEqual(false)
    });
    

});


// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

// Given an empty object
// When passed to contains
// Then it should return false
test.todo("contains on empty object returns false");

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
