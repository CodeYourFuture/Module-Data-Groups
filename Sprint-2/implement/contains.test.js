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
    const obj1 = {
      name: "dami",
      age: 34,
      height: 5.3,
      location: "London",
    };
    const propertyNameCheck1 = "name";
    const expected1 = true;
    const result1 = contains(obj1, propertyNameCheck1);
    expect(result1).toBe(expected1);
  }
);

// Given an empty object
// When passed to contains
// Then it should return false

test("given an empty object, should return false", () => {
  const obj2 = {};
  const propertyNameCheck2 = "a";
  const expected2 = false;
  const result2 = contains(obj2, propertyNameCheck2);
  expect(result2).toBe(expected2);
});
// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
//this test requirement is covered on line 21

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test(
  "when passed an object and a property name, should return false if the object " +
    "does not contain the property.",
  () => {
    const obj3 = {
      title: "Things fall apart",
      year: 1958,
      publisher: "pan-macmillan",
    };
    const propertyNameCheck3 = "location";
    const expected3 = false;
    const result3 = contains(obj3, propertyNameCheck3);
    expect(result3).toBe(expected3);
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

test.each([["hello"], [123], [true], [[]], [null]])(
  "throws an error when input is %p",
  (type) => {
    expect(() => {
      contains(type, "A");
    }).toThrow("Invalid data type");
  }
);
