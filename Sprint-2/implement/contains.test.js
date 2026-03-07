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
  expect(contains({}, "c")).toEqual(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains correct object returns true", () => {
  expect(contains({ a: 4, b: 3, c: 9 }, "c")).toEqual(true);
  expect(contains({ a: 4, b: 3, c: 9 }, "a")).toEqual(true);
  expect(
    contains(
      { ant: "in your pants", bee: "in your bonnet", cats: "pajamas" },
      "bee"
    )
  ).toEqual(true);
  expect(contains({ aa: "cars", ba: "baracus", cdeez: "nope" }, "ba")).toEqual(
    true
  );
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains incorrect object returns false", () => {
  expect(contains({ a: 4, b: 3, c: 9 }, "d")).toEqual(false);
  expect(contains({ a: 4, b: 3, c: 9 }, "8")).toEqual(false);
  expect(
    contains(
      { ant: "in your pants", bee: "in your bonnet", cats: "pajamas" },
      "wasp"
    )
  ).toEqual(false);
  expect(
    contains({ aa: "cars", ba: "baracus", cdeez: "nope" }, "Hanable Smith")
  ).toEqual(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("contains incorrect object type returns false", () => {
  expect(contains([], "d")).toBe(false);
});
