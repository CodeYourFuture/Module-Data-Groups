const invert = require("./invert.js");

describe("invert function", () => {
  test("inverts a simple object with one key-value pair", () => {
    expect(invert({ a: 1 })).toEqual({ "1": "a" });
  });

  test("inverts an object with multiple key-value pairs", () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
  });

  test("inverts an object with string values", () => {
    expect(invert({ name: "John", city: "New York" })).toEqual({ 
      "John": "name", 
      "New York": "city" 
    });
  });

  test("inverts an object with mixed value types", () => {
    expect(invert({ x: 10, y: "hello", z: true })).toEqual({
      "10": "x",
      "hello": "y",
      "true": "z"
    });
  });

  test("handles empty object", () => {
    expect(invert({})).toEqual({});
  });

  test("handles object with duplicate values (later ones overwrite)", () => {
    expect(invert({ a: 1, b: 1 })).toEqual({ "1": "b" });
  });

  test("handles object with numeric keys", () => {
    const result = invert({ 1: "one", 2: "two" });
    expect(result).toEqual({ one: "1", two: "2" });
  });

  test("preserves all properties", () => {
    const original = { color: "red", size: "large", price: 100 };
    const inverted = invert(original);
    
    // Check that all original values become keys in the inverted object
    // Sort the arrays to compare regardless of order (numeric keys are sorted differently)
    expect(Object.keys(inverted).sort()).toEqual(["red", "large", "100"].sort());
    // Check that inverted values are the original keys
    expect(Object.values(inverted).sort()).toEqual(["color", "size", "price"].sort());
  });
});
