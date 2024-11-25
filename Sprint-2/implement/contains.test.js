const contains = require("./contains.js");
describe("contains function", () => {
  test("contains on empty object returns false", () => {
    const result = contains({}, "a");
    expect(result).toBe(false);
  });

  test("contains with an existing property returns true", () => {
    const result = contains({ a: 1, b: 2 }, "a");
    expect(result).toBe(true);
  });

  test("contains with a non-existent property returns false", () => {
    const result = contains({ a: 1, b: 2 }, "c");
    expect(result).toBe(false);
  });

  test("contains with invalid parameters (array) returns false", () => {
    const result = contains([], "a");
    expect(result).toBe(false);
  });

  test("contains with invalid parameters (null) returns false", () => {
    const result = contains(null, "a");
    expect(result).toBe(false);
  });

  test("contains with invalid parameters (string) returns false", () => {
    const result = contains("not an object", "a");
    expect(result).toBe(false);
  });
});

