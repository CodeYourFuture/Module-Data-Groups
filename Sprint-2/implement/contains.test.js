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
  const object = {};

  expect(contains(object, "cat")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("Given object with properties, should return true if the property name is in the object", () => {
  const object1 = {
    test1: 56,
    test2: "cat",
    test3: "dog",
  };
  expect(contains(object1, "test2")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("When the property name isn't in the object, should return false", () => {
  const object2 = {
    test4: 52,
    test5: "mango",
    test6: "banana",
  };
  expect(contains(object2, "test7")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("Given invalid parameters, should return false or an error", () => {
  const array1 = ["duo", "mono", 105];

  expect(contains(array1, "mono")).toBe(false);
});

//Given a string as an object
//When passed to contains
//Then it should return false
test("Given a string as an object, should return false or an error", () => {
  const string1 = "hello";

  expect(contains(string1, "mono")).toBe(false);
});

//Given an object that's 'null'
//When passed to contains
//Then it should return false
test("Given a null object, should return false or an error", () => {
  const object3 = null;

  expect(contains(object3, "mono")).toBe(false);
});
