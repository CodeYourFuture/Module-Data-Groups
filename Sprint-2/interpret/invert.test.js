const invert = require("./invert.js")


test("when given only one key value pair return it inverted", () =>{
    expect({ a : 1 }).toEqual({'1': 'a'})
})

test("when given many key value pair return all of them inverted inverted", () =>{
    expect({x : 10, y : 20}).toEqual({"10": "x", "20": "y"})
})