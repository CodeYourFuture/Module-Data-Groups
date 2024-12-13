const contains = require("./contains.js");


test("contains on empty object returns false", () => {
  expect(contains({}, "a")).toBe(false);
});


test("contains with an existing property returns true", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
});


test("contains with a non-existent property returns false", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});


test("contains with an array returns false", () => {
  expect(contains([1, 2, 3], "a")).toBe(false);
});


test("contains with null returns false", () => {
  expect(contains(null, "a")).toBe(false);
});


test("contains with non-object returns false", () => {
  expect(contains(42, "a")).toBe(false);
});

