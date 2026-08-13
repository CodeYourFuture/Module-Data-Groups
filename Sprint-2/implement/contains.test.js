const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contain a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

test(
  "when passed an object and a property name, should return true if the object " +
    "contains the property",
  () => {
    const obj = {
      name: "dami",
      age: 34,
      height: 5.3,
      location: "London",
    };
    const propertyNameCheck = "name";
    const expected = true;
    const result = contains(obj, propertyNameCheck);
    expect(result).toBe(expected);
  }
);
// Given an empty object
// When passed to contains
// Then it should return false

test("given an empty object, should return false", () => {
  const obj = {};
  const propertyNameCheck = "a";
  const expected = false;
  const result = contains(obj, propertyNameCheck);
  expect(result).toBe(expected);
});
// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
//this test requirement is cvered on line 21

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test(
  "when passed an object and a property name, should return false if the object " +
    "does not contain the property.",
  () => {
    const obj = {
      title: "Things fall apart",
      year: 1958,
      publisher: "pan-macmillan",
    };
    const propertyNameCheck = "location";
    const expected = false;
    const result = contains(obj, propertyNameCheck);
    expect(result).toBe(expected);
  }
);
test("should throw an error when the input is an array, even if the specified key exists", () => {
  const arr = ["apple", "banana"];
  const arrIndex = 0;
  expect(() => contains(arr, arrIndex)).toThrow("Invalid data type");
});
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

test.each([["hello"], [123], [true], [undefined], [null]])(
  "throws an error when input is %p",
  (type) => {
    expect(() => {
      contains(type, "A");
    }).toThrow("Invalid data type");
  }
);
