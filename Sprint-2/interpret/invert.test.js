const invert = require("./invert");

test("given an object with string keys", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("given an empty object", () => {
    expect(invert({})).toEqual({});
  });
  
  test("given an object with one property", () => {
    expect(invert({ x: 100 })).toEqual({ "100": "x" });
  });

  test("given an object with non-string, non-number values", () => {
    expect(invert({ a: true, b: null })).toEqual({ "true": "a", "null": "b" });
  });

  test("given an object with duplicate values", () => {
    expect(invert({ a: 1, b: 1 })).toEqual({ "1": "b" }); // Last key overwrites
  });

  test("given an object with numeric keys", () => {
    expect(invert({ 1: "a", 2: "b" })).toEqual({ a: "1", b: "2" });
  });
  