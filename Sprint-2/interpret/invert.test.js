const invert = require("./invert.js")

test("given an object, should invert the key/value pairs", ()=>{
    expect(invert({ a: 1 })).toEqual({ "1" : "a" });
    expect(invert({ a: 1, b: 2 })).toEqual({ "1" : "a", "2" : "b" });
    expect(invert({})).toEqual({});
})