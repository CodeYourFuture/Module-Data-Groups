const invert = require("./invert.js");

// Empty object
test("invert on an empty object returns an empty object", () => {
    expect(invert({})).toEqual({});
})
// Basic objects
test("invert on object returns inverted property object ", () => {
    expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
})

// Single property
// Multiple properties 
// String values
// Duplicate values
//

