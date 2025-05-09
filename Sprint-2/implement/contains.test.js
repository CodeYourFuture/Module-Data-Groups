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
test.todo("contains a functioon"), () => {
    const object = {g: 3, h: 6, j: 5}
    expected(contains(object, 'z').ToEqual(false));
    expected(contains(object, 'h').ToEqual(true));
}

   
// Given an empty object
// When passed to contains
// Then it should return false
test.todo("contains on empty object returns false"), () => {
    const object = {}
    expected(contains(object, '').ToEqual(false));
}

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test.todo("contains an object with properties"), () => {
    const object = {a: 1, b: 2}
    expected(contains(object, 'b').ToEqual(true));
}
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test.todo("contains an object with properties"), () => {
    const object = {a: 1, b: 2}
    expected(contains(object, 'z').ToEqual(false));
}
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

test.todo("contains invalid parameters like an array returns false"), () => {
    const object = [];
    expect(contains(object, 'a')).toEqual(false);
}