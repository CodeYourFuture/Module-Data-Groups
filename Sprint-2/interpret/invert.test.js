const invert = require("./invert");

describe("invert function", () => {
    test("Given an object with key-value pairs, it should swap the keys and values in the object", () => {
        expect(invert({ x: 10, y: 20 })).toEqual({"10": "x", "20": "y"})
    });
});
