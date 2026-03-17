const contains = require("./contains.js");

describe("contains", () => {
  test("returns false for an empty object", () => {
    expect(contains({}, "a")).toBe(false);
  });

  test("returns true when object contains the property", () => {
    expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
  });

  test("returns false when object does not contain the property", () => {
    expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
  });

  test("returns false when given an array instead of an object", () => {
    expect(contains([], "a")).toBe(false);
  });

  test("returns false when given null", () => {
    expect(contains(null, "a")).toBe(false);
  });

  test("returns false when given a non-object type", () => {
    expect(contains(42, "a")).toBe(false);
    expect(contains("string", "a")).toBe(false);
  });
});