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
test("contains an empty object returns false", () => {
const obj = {};
expect(contains(obj,"m")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains an object with an existing property should return true", () => {
const obj = {name:"Milli",surname:"Mesfin",city:"Birmingham"};
expect(contains(obj,'surname')).toBe(true);
expect(contains(obj,'city')).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains an object with non-existent property name should return false", () => {

const obj = {name:"Milli",surname:"Mesfin", city:"Birmingham"}
expect(contains(obj,'age')).toBe(false);
expect(contains(obj,'address')).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("contains an invalid parameter like array should return false" ,() => {
const obj = ["code","your","future"];
expect(contains(obj,'age')).toBe(false);
expect(contains(obj,'address')).toBe(false);
});
