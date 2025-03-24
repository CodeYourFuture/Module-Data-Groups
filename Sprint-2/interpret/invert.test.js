const invert= require("./invert.js");

test("should swap the content of an array passed into the function", () => {
    expect(invert({x : 10, y : 20})).toEqual({"10": "x", "20": "y"})
});


test("should swap the content of an array passed into the function", () => {
    expect(invert({})).toEqual({})
});


test("should swap the content of an array passed into the function", () => {
    expect(invert({x : 10})).toEqual({"10": "x",})
});

