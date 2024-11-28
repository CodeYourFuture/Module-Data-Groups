const invert = require("./invert.js");

describe("invert", () => {
    test("given an object, invert is passed this object, then it should swap the keys and values in the object", () => {
        expect(invert({ x: 10, y: 20 })).toStrictEqual({ "10": "x", "20": "y" });
    });    
})