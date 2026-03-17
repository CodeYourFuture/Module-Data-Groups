const invert = require("./invert");

test("returns an object with the key and value swapped when given a single key-value pair", ()=>{
  expect(invert({a:1})).toEqual({'1':'a'})
});

test("returns an object with all keys and values swapped for multiple key-value pairs",()=>{

    expect(invert({a:1, b:2})).toEqual({'1':'a','2':'b'})
});