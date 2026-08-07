const contains = require("./contains")

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
test("contains returns true for existing property", () => {
const currentOutput = contains({a:1,b:2}, 'a');
const targetOutput = true;
expect(currentOutput).toEqual(targetOutput);    
});

// Given an empty object
// When passed to contains
// Then it should return false
test("contains on empty object returns false", () => {
const currentOutput = contains({}, 'a');
const targetOutput = false;
expect(currentOutput).toEqual(targetOutput);    
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains returns true for existing property", () => {
const currentOutput = contains({a:1,b:2}, 'b');
const targetOutput = true;
expect(currentOutput).toEqual(targetOutput);    
}); 

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains returns false for non-existent property", () => {
const currentOutput = contains({a:1,b:2}, 'c');
const targetOutput = false;
expect(currentOutput).toEqual(targetOutput);    
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("contains returns false for invalid parameters", () => {
const currentOutput = contains([1,2,3], 'a');
const targetOutput = false;
expect(currentOutput).toEqual(targetOutput);    
});