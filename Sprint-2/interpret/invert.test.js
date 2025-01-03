const invert = require("./invert.js");

test("inverts an object with simple key-value pairs", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const inverted = invert(obj);
    expect(inverted).toEqual({ 1: 'a', 2: 'b', 3: 'c' });
});

test("inverts an object with string values", () => {
    const obj = { apple: "fruit", carrot: "vegetable" };
    const inverted = invert(obj);
    expect(inverted).toEqual({ fruit: "apple", vegetable: "carrot" });
});


test("inverts an empty object", () => {
    const obj = {};
    const inverted = invert(obj);
    expect(inverted).toEqual({});
});

test("inverts an object with null or undefined values", () => {
    const obj = { a: null, b: undefined };
    const inverted = invert(obj);
    expect(inverted).toEqual({ null: 'a', undefined: 'b' });
});

test("inverts an object with a single key-value pair", () => {
    const obj = { a: 1 };
    const inverted = invert(obj);
    expect(inverted).toEqual({ 1: 'a' });
});

test("inverts an object with mixed types", () => {
    const obj = { a: 1, b: "apple", c: 2 };
    const inverted = invert(obj);
    expect(inverted).toEqual({ 1: 'a', apple: 'b', 2: 'c' });
});
