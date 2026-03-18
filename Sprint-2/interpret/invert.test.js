const invert = require("./invert.js");


test(" should return an object with swapped keys and values", () => {
    expect(invert({"a" : "1", "b": "2"})).toEqual({"1" : "a", "2" : "b"});
});