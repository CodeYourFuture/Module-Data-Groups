const contains = require("./contains");

describe("contains function", () => {
  test("contains on empty object returns false", () => {
    expect(contains({}, 'a')).toBe(false);
  });

  test("contains with an existing property returns true", () => {
    expect(contains({a: 1, b: 2}, 'a')).toBe(true);
  });

  test("contains with a non-existent property returns false", () => {
    expect(contains({a: 1, b: 2}, 'c')).toBe(false);
  });

  test("contains with invalid parameters like an array throws an error", () => {
    expect(() => contains([], 'a')).toThrow("First argument must be an object.");
  });

  test("contains with non-object first argument throws an error", () => {
    expect(() => contains(null, 'a')).toThrow("First argument must be an object.");
    expect(() => contains(42, 'a')).toThrow("First argument must be an object.");
    expect(() => contains("string", 'a')).toThrow("First argument must be an object.");
  });
});
