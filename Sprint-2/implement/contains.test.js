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
    const input = {};
    const target = 'a'
    const result = contains(input, target);
    expect(result).toBe(false);

});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("Given an object with properties,it should return true", () => {
    const input = { a: 1, b: 2 };
    const target = 'a'
    const result = contains(input, target)
    expect(result).toBe(true);
});


// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("given an object with a non-existent property name, it should return false", () => {
  const input = { a: 1, b: 2 };
  const target = 'c'
  const result = contains(input, target);
  expect(result).toBe(false);
});


// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("given an invalid parameters, it should return false or throw an error", () => {
    const input = ['a', 'b', 'c'];
    const target = 'a'
    expect(() => contains(input, target)).toThrow();
    
});

