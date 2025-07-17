// const invert = require("./invert.js")
const invert = require("./invert.js");


//Given a function invert
// When passed an object and a property name
// Then it should return the inverted object
test("", () => {
expect(invert({ a: 1 })).toEqual({ '1': 'a' });
});
