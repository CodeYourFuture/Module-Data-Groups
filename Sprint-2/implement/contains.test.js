const contains = require("./contains.js");

test("Give a contains with object and property and if the object contains the property returns true", () => {
  expect(contains({ a: 1, b: 2 }, "b")).toEqual(true);
});

test("Give a contains with empty object and  when passed to contains it returns false", () => {
  expect(contains({}, "y")).toEqual(false);
});

test("Give a contains with object and property and if the property is non-existent returns false", () => {
  expect(contains({ a: 1, b: 2 }, "z")).toEqual(false);
});

test("Give invalid parameter in this case array when passed to contains it returns false", () => {
  expect(contains(["a", 2, "b", 3, 2], 2)).toEqual(false);
});

test("Give invalid parameter in this case empty  when passed to contains it returns false", () => {
  expect(contains(null)).toEqual(false);
});
test("returns false for undefined", () => {
  expect(contains(undefined, "key")).toEqual(false);
});

test("returns false for numbers", () => {
  expect(contains(1234, "key")).toEqual(false);
});
