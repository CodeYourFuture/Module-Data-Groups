const invert = require('./invert');

test("invert on an object, should return swapped keys and values", ()=>{
    expect(invert({category: "fiction", film: "final fantasy"})).toEqual({"fiction": "category", "final fantasy": "film"});
    expect(invert({x: 10, y: 20})).toEqual({"10": "x", "20": "y"});
});