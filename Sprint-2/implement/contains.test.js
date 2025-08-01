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
test("Given a contains function when passed an object and property name then it should false if the object doesnt contain the property", () => {
  currentOutput = contains(
    { firstName: "Mansoor", lastName: "Munawar" },
    "hello"
  );
  targetOutput = false;
  expect(currentOutput).toBe(targetOutput);
});
// When passed an object and a property name")
// Given an empty object
// When passed to contains
// Then it should return false
test("contains on empty object returns false", () => {
  const currentOutput = contains({});
  const targetOutput = false;
  expect(currentOutput).toBe(targetOutput);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("given an object with properties when passed to contains with existing propery name, it returns true", () => {
  const currentOutput = contains(
    { firstName: "Mansoor", organisation: "CYF" },
    "firstName"
  );
  const targetOutput = true;
  expect(currentOutput).toBe(targetOutput);
});
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("Given an object with properties and when it passed to contains with non-existent property name then it should return false", () => {
  const currentOutput = contains(
    { firstName: "Mansoor", organisation: "CYF" },
    "Name"
  );
  const targetOutput = false;
  expect(currentOutput).toBe(targetOutput);
});
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("given invalid parameters like an array when passed to contains, it returns false or throw an error", () => {
  const currentOutput = contains([1, 2, 3, 4], "hello");
  targetOutput = false;
  expect(currentOutput).toBe(targetOutput);
});
