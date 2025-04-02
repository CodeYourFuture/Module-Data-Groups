const invert=require("./invert.js");

test("when an object is passed to invert, it should return an object with the key-value pairs swapped", () => {
    const obj = { a: 1, b: 2 };
    const expected = { 1: "a", 2: "b" };
    expect(invert(obj)).toEqual(expected);
});

test("when an empty object is passed to invert, it should return an empty object", ()=>{
    const obj = {};
    const expected = {};
    expect(invert(obj)).toEqual(expected);
});