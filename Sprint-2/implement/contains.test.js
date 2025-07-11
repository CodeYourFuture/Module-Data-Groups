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
    const emptyObj = {};
    const prop3 = 'beans';
    expect(contains(emptyObj,prop3)).toEqual(false);
});

const obj = {name: 'Amy-Rose', age: 28, favMusic: 'Smashing Pumpkins', uhOh: 0};

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("should return true if the object contains the property", () => {
    const prop1 = 'favMusic';
    expect(contains(obj,prop1)).toEqual(true);
})


// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("should return false if the object doesn't contain the property", () => {
    const prop2 = 'favColour';
    expect(contains(obj,prop2)).toEqual(false);
})


// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

test("invalid input should return false", () => {
    const prop4 = [1,2,3,4];
    expect(contains(obj, prop4)).toEqual(false);
})


// Given an object that contains falsey values
// When passed to contains with an existing property
// Then it should still return true

test("for a property that does exist in the object, contains should return true even if the value in the key-value pair is falsey", () => {
    const prop5 = 'uhOh';
    expect(contains(obj,prop5)).toEqual(true);
})