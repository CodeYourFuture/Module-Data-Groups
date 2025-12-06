const contains = require("./contains.js");

describe("contains", () => {
  test("contains returns true for existing property", () => {
    expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
    expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
  });

  test("contains on empty object returns false", () => {
    expect(contains({}, "a")).toBe(false);
  });

  test("contains returns true for multiple properties", () => {
    expect(contains({ name: "John", age: 30, city: "NY" }, "age")).toBe(true);
  });

  test("contains returns false for non-existent property", () => {
    expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
  });

  test("contains returns false for non-object types", () => {
    expect(contains(null, "a")).toBe(false);
    expect(contains(undefined, "a")).toBe(false);
  });
});
