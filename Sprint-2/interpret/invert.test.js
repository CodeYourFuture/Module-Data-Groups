const invert = require("./invert");
describe("invert function", () => {
  test("should reverse keys and values", () => {
    expect(invert({ a: 1 })).toEqual({ 1: "a" });
  });

  test("should return an empty object when object is empty", () => {
    expect(invert({})).toEqual({});
  });

  test("should handle number as keys", () => {
    expect(invert({ 1: "apple", 2: "orange" })).toEqual({
      apple: "1",
      orange: "2",
    });
  });
  test("should handle string keys", () => {
    expect(invert({ one: "apple", two: "orange" })).toEqual({
      apple: "one",
      orange: "two",
    });
  });
});
