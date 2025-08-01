const contains = require("./contains.js");

//Implement a function called contains that checks an object contains a
//particular property

//E.g. contains({a: 1, b: 2}, 'a') // returns true
//as the object contains a key of 'a'

//E.g. contains({a: 1, b: 2}, 'c') // returns false
//as the object doesn't contains a key of 'c'
//*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

// Given an empty object
// When passed to contains
// Then it should return false
// test.todo("contains on empty object returns false");

test("contains on empty object returns false", function () {
    
    const input = "";
    const currentOutput = contains(input);
    const targetOutput = false;
  
    expect(currentOutput).toEqual(targetOutput);
});


// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

test("contains on with an existing property name", function () {
    
  const input = {firstName: "Zaida", lastName: "Smith", occupation: "writer",age: 40,alive: true,};
  const currentOutput = contains(input, "Zaida");
  const targetOutput = true;

  expect(currentOutput).toEqual(targetOutput);

});



// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("contains returns false for non-existent property", function () {
  const input = {
    firstName: "Zaida",
    lastName: "Smith",
    occupation: "writer",
    age: 40,
    alive: true,
  };

  const currentOutput = contains(input, "middleName");
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);

});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error


test("contains returns false for invalid parameter", function () {
  const input = {
    firstName: "Zaida",
    lastName: "Smith",
    occupation: "writer",
    age: 40,
    alive: true,
  };

  const currentOutput = contains(input, "errortest");
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);

});


test("contains returns true for toString", function () {

  let obj = {}, propertyName = "toString";

  const currentOutput = contains(obj, propertyName);
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);

});

test("contains returns false first parameter is an array", function () {
  const input = ["A", "B", "C"];

  const currentOutput = contains(input, "1");
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);

});


test("contains returns True Empty string can also be a key", function () {
  const input = { "": "Boo" };

  const currentOutput = contains(input, "");
  const targetOutput = true;

  expect(currentOutput).toEqual(targetOutput);

});

test("contains returns False even though type of null is equal to object", function () {

  const input = { null: "null" };

  const currentOutput = contains(input, "");
  const targetOutput = false;

  expect(currentOutput).toEqual(targetOutput);

});
