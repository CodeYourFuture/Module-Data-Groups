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
test("It will return false when we call contains with an empty object", () => {
    const input = {};
    const currentOutput =  contains(input, "anyKey");
    const targetOutput = false;
    expect(currentOutput).toStrictEqual(targetOutput);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("It will return true when we call contains with an existing property name", () => {
    const input = {
        name: "Ali",
        age: 25,
    };
    const currentOutput =  contains(input, "name");
    const targetOutput = true;
    expect(currentOutput).toStrictEqual(targetOutput);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("It will return false when we call contains with a non-existent property name", () => {
    const input = {
        name: "Ali",
        age: 25,
    };
    const currentOutput =  contains(input, "city");
    const targetOutput = false;
    expect(currentOutput).toStrictEqual(targetOutput);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("It will return false when we call contains with an array", () => {
    const input = []
    const currentOutput =  contains(input, "length");
    const targetOutput = false;
    expect(currentOutput).toStrictEqual(targetOutput);
});
