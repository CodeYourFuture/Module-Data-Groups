const invert = require("./invert.js");
describe("invert", () => {
  test("returns error for an invalid input", () => {
    expect(() => invert("Hello World")).toThrow("Invalid input");
    expect(() => invert(["cat", "dog", "pig"])).toThrow("Invalid input");
    expect(() => invert(null)).toThrow("Invalid input");
  });

  test("returns an empty object for an empty object input", () => {
    expect(invert({})).toEqual({});
  });

  test("handles an object with a single property", () => {
    expect(invert({ cat: 3 })).toEqual({ 3: "cat" });
  });

  test("returns an object with keys and values swapped", () => {
    expect(invert({ cat: 3, dog: 2 })).toEqual({ 3: "cat", 2: "dog" });
  });

  test("handles duplicate values by keeping the last key", () => {
    expect(invert({ cat: 3, dog: 2, pig: 3 })).toEqual({ 3: "pig", 2: "dog" });
  });
});
