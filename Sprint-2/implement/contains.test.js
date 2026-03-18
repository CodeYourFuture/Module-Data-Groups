const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, "a") // returns true
E.g. contains({a: 1, b: 2}, "c") // returns false
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

  test("returns false when given an array", () => {
    expect(contains(["a", "b"], "0")).toBe(false);
  });

  test("returns false when given null", () => {
    expect(contains(null, "a")).toBe(false);
  });
});
