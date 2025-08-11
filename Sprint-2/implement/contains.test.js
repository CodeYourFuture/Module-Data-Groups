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
describe("this should return true", () => {
    test("when the object contains a specific key", () => {
        expect(contains({ a: 1, b: 2 }, 'a')).toEqual(true)
    })
})

describe("this should return false", () => {
    test("when invalid parameters like arrays", () => {
        expect(contains([1, 2, 3], 1)).toEqual(false)
    })
    test("when the object is empty", () => {
        expect(contains({})).toEqual(false)
    })
    test("when the object doesn`t contain a specific key", () => {
        expect(contains({ a: 1, b: 2 }, '1')).toEqual(false)
    })

})