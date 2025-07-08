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

test("contains on empty object returns false",function(){
const input = {}
const result = contains(input,"name")
expect(result).toBe(false)
});


// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("returns true when object contains the property 'name'",function(){
const input ={firstName: "Sara",lastName: "Tahir",}
const result= contains(input, "firstName")
expect(result).toBe(true)
})
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("returns false when object doesn't contain the property 'name'",function(){
const input ={firstName: "Sara",lastName: "Tahir",}
const result= contains(input, "address")
expect(result).toBe(false)
})
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("returns false when an array is passed instead of an object", function () {
  const input = ["address"];
  const result = contains(input, "address");
  expect(result).toBe(false);
});