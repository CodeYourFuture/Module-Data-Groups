const invert = require("./invert.js");

test("invert an object with one pair",()=>{
    expect(invert({a:1})).toEqual({1:"a"});
});

test("invert an object with more than ne pair", () => {
  expect(invert({ a: 1 , b : 2})).toEqual({ 1: "a" , 2: "b"});
});
