const contains = require("./contains");

test("returns true when object contains the property", () => {
  expect(contains({ a: 1, b: 2 }, "a")).toBeTruthy();
});

test("returns false when object does not contain the property", () => {
  expect(contains({ a: 1, b: 2 }, "c")).toBeFalsy();
});

test("returns false when object is empty", () => {
  expect(contains({}, "a")).toBeFalsy();
});

test("returns false when given an array", () => {
  expect(contains([], "length")).toBeFalsy();
});

test("returns false when obj is null", () => {
  expect(contains(null, "key")).toBeFalsy();
});

test("returns false when obj is not an object", () => {
  expect(contains("not an object", "a")).toBeFalsy();
});
