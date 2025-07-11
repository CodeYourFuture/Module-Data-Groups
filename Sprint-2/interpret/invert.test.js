const invert = require("./invert.js");
// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}
describe("invert", () =>{
    [
        {input:{x : 10, y : 20}, expected:{"10": "x", "20": "y"}},
        {input:{ a : 1 }, expected:{ 1 : "a" }},
        {input:{a : 1, b: 2}, expected:{ 1 : "a" , 2 : "b" }},
    ].forEach(({input,expected}) =>
        it(`return inverted key / value object, for [${input}]`,()=>
        expect(invert(input)).toEqual(expected))
)
});
