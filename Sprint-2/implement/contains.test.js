const contains = require("./contains.js");

/*
Implement a function called contains that checks whether an object contains
a particular own property.

E.g. contains({ a: 1, b: 2 }, "a") // returns true
E.g. contains({ a: 1, b: 2 }, "c") // returns false
*/

describe("contains()", () => {
  test("returns false for an empty object", () => {
    expect(contains({}, "a")).toBe(false);
  });

  test("returns true when the property exists", () => {
    expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
  });

  test("returns false when the property does not exist", () => {
    expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
  });

  test("returns false for inherited properties", () => {
    expect(contains({ a: 1, b: 2 }, "toString")).toBe(false);
  });

  test("returns false when given an array with a realistic array key", () => {
    expect(contains(["a", "b"], 0)).toBe(false);
  });

  test("returns false when given null", () => {
    expect(contains(null, "a")).toBe(false);
  });

  test("supports non-string property names", () => {
    const obj = { 3: 12 };
    expect(contains(obj, 3)).toBe(true);
  });

  test("supports empty string as a property name", () => {
    const obj = { "": 99 };
    expect(contains(obj, "")).toBe(true);
  });
});
