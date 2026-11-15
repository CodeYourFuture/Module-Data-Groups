const invert = require("./invert.js");

// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

test("invert on object returns inverted property object ", () => {
    expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
})