const invert = require("./invert.js");

test("swaps key with values", () => {
    expect(invert({x: 1})).toEqual(({"10": "x", "20": "y"}));
});