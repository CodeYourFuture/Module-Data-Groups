const contains = require("./contains");

test("returns true when object contains the property", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toEqual(true);
});

test("returns false when object does not contain the property", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toEqual(false);
});

test("returns false when object is empty", () => {
  expect(contains({}, "a")).toEqual(false);
});

test("returns false when given an array", () => {
  expect(contains([], "length")).toEqual(false);
});

test("returns false when obj is null", () => {
  expect(contains(null, "key")).toEqual(false);
});

test("returns false when obj is not an object", () => {
  expect(contains("not an object", "a")).toEqual(false);
});
