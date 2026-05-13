const invert = require("./invert.js");

describe("invert", () => {
it("object returns inverted object", () => {
    
// a) What is the current return value when invert is called with { a : 1 }
    let object = { a : 1 };    
    expect(invert(object)).toEqual({1: "a"})

// b) What is the current return value when invert is called with { a: 1, b: 2 }
    object = { a: 1, b: 2 }; 
    expect(invert(object)).toEqual({1: "a", 2: "b"})
});
});