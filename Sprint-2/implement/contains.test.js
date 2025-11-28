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
test("given a contains function ,returns true for existing property, false otherwise", () => {
   const input = {a: 1, b: 2};
   const propertyName = 'a';
   const currentOutput = contains(input, propertyName);
   const targetOutput = true;
   expect(currentOutput).toBe(targetOutput);
});
// Given an empty object
// When passed to contains
// Then it should return false
test("given an empty object, contains returns false",()=>{
    const input = {};
    const propertyName = 'anyProp';
    const currentOutput = contains(input,propertyName);
    const targetOutput = false;
    expect(currentOutput).toBe(targetOutput);
});
// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

test("given an object with properties, returns true for existing property",()=>{
    const input = {x:10,y:20,z:30};
    const propertyName = 'y';
    const currentOutput = contains(input,propertyName);
    const targetOutput = true;
    expect(currentOutput).toBe(targetOutput);
});
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("given an object with properties, returns false for non-existing property",()=>{
    const input = {x:10,y:20,z:30};
    const propertyName = 'a';
    const currentOutput = contains(input,propertyName);
    const targetOutput = false;
    expect(currentOutput).toBe(targetOutput);
});
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("given invalid parameters like an array, contains returns false",()=>{
    const input = [1,2,3];
    const propertyName = '0';
    const currentOutput = contains(input,propertyName);
    const targetOutput = false;
    expect(currentOutput).toBe(targetOutput);
});