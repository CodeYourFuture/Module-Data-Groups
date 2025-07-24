const invert = require("./invert.js");

it("it should return an object with reverce key and values", () => {
    expect(invert({ a : 1 })).toEqual({ '1': 'a' });
    expect(invert({ a: 1, b: 2 })).toEqual({ '1': 'a', '2': 'b' });
});