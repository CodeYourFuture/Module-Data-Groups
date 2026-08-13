const invertObj = require("./invert.js");

describe("invertObj", () => {
  test("when given an object, should swap the keys and values in the object", () => {
    expect(invertObj({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
  });

  test("when passed an object with one key-value pair, should swap the key and value", () => {
    expect(invertObj({ a: 1 })).toEqual({ 1: "a" });
  });

  test("when passed an empty object, should return an empty object", () => {
    expect(invertObj({})).toEqual({});
  });

  test("when passed string values, should swap the keys and values", () => {
    expect(invertObj({ first: "apple", second: "banana" })).toEqual({
      apple: "first",
      banana: "second",
    });
  });

  test("when passed boolean values, should swap the keys and values", () => {
    expect(invertObj({ yes: true, no: false })).toEqual({
      true: "yes",
      false: "no",
    });
  });

  test("when passed a null value, should use 'null' as the key", () => {
    expect(invertObj({ a: null })).toEqual({
      null: "a",
    });
  });

  test("when passed an undefined value, should use 'undefined' as the key", () => {
    expect(invertObj({ a: undefined })).toEqual({
      undefined: "a",
    });
  });

  //error
  test.each([null, undefined, [], "cat", 4, true])(
    "Throws an error when input is %p",
    (input) => {
      expect(() => {
        invertObj(input);
      }).toThrow("Enter a valid object");
    }
  );

  test("when value is swapped and keys are identical", () => {
    const input = { a: 1, b: 1 };
    const expected = {
      1: "b",
    };
    const result = invertObj(input);
    expect(result).toEqual(expected);
  });
});
