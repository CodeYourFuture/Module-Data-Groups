const invert = require("./invert.js");

test("object with 1 key-value pair. returns object with key-value pairs swopped.", () => {
  expect(invert({a: 1})).toEqual({'1': 'a'})
})

test("object with 2 key-value pairs. returns object with key-value pairs swopped.", () => {
  expect(invert({a: 1, b: 2})).toEqual({'1': 'a', '2': 'b'})
})

test("object with 3 key-value pairs. returns object with key-value pairs swopped.", () => {
  expect(invert({a: 1, b: 2, z: 12})).toEqual({'1': 'a', '2': 'b', '12': 'z'})
})

test("object with 0 key-value pair. returns empty object.", () => {
  expect(invert({})).toEqual({})
})

test("object with invalid input. throw error: 'invert requires an object.", () => {
  expect(() => invert("bones")).toThrow('invert requires an object.')
})