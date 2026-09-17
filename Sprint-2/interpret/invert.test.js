const invert = require("./invert.js")

test('given an empty object , returns an empty object', () => {
    expect(invert({})).toEqual({})
})

test('Given an object with a single pair swaps ', () => {
    expect(invert({ a: "hello" })).toEqual({ "hello": "a" })
})

test('given an object with more than two pairs swaps the keys and values ', () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" })
})