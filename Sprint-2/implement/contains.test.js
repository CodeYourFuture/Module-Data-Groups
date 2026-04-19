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
test("should return true if the input object contain the key value", () => {
  expect(contains({ a: 1, b: 2, c: 3, d: 4 }, "a")).toBe(true);
  expect(contains({ a: 1, b: 2, c: 3, d: 4 }, "f")).toBe(false);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("should return false if the object is empty", () => {
  let emptyObject = {};
  expect(contains(emptyObject, "a")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("should return true if the input object contain existing key value", () => {
  let infoObject = { name: "John", age: "24", city: "Glasgow" };
  expect(contains(infoObject, "name")).toBe(true);
  expect(contains(infoObject, "age")).toBe(true);
  expect(contains(infoObject, "city")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("should return false if the input object do not have non existing key value", () => {
  let goodsObject = { fruit: "Apple", amount: "50", origin: "Glasgow" };
  expect(contains(goodsObject, "tree")).toBe(false);
  expect(contains(goodsObject, "color")).toBe(false);
  expect(contains(goodsObject, "country")).toBe(false);
});
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("should return false if the input object do not have non existing key value", () => {
  let mixObject = { a: 2, b: "hello", c: [] };
  expect(contains(mixObject, "c")).toBe(false);


expect(contains(["A", "B"], "1" )).toBe(false);
expect(contains(null, "1" )).toBe(false);
expect(contains(undefined, "1" )).toBe(false);
expect(contains("ABC", "1" )).toBe(false);
});
