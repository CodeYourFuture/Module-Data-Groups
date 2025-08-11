const invert = require("./invert.js");

test("swap the keys and values in the object", () => {
    expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
});

test("handles empty object", () => {
    expect(invert({})).toEqual({});
});

test("handles string with an object", () => {
    expect(invert({ a: "one", b: "two", c: "three"})).toEqual({ one: "a", two: "b", three: "c" });
});

test("handles duplicate values with the last key", () => {
    expect(invert({ a: 1, b: 1 })).toEqual({ 1: "b"});
});

test("handles an object with a single key-value pair", () => {
    expect(invert({a: 1})).toEqual({1: "a"});
});