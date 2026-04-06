const invert = require("./invert.js");

//Given a function invert()
//When passed an object 
//Then it should return a swapped key and value in the object
// example: Given => {a: 1, b: 2, c: 3}, should return {1: a, 2: b, 3: c}

test("Given an object with at least one key value pair, it should return an inverted key value", () => {
    const input = { a: 1, b: 2, c: 3 };
    const output = invert(input);
    const target = { "1": "a", "2": "b", "3": "c" };
    expect(output).toEqual(target);
})
