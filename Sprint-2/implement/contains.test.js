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
  const inputEmpty = [];
  const result = contains(inputEmpty);
  expect(result).toEqual(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("Given an object with properties when pass to contains it returns true", () => {
  const myObject = {
    name: "Alice",
    age: 30,
    city: "London",
  };
  const result = contains(myObject, "name");
  expect(result).toEqual(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("give a object with proprieties when pass contains with non-exist proprity name it should return false", () => {
  const inputProprieties2 = ["f", "g", "h"];
  const result = contains(inputProprieties2);
  expect(result).toEqual(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("invalid parameters  should return false or throw an error", () => {
  const invalidParameters = ("f", "g", "h");
  const result = contains(invalidParameters);
  expect(result).toEqual(false);
});
