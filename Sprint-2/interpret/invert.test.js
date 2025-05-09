const invert = require("./invert");

test(`should return empty object, if given object is empty`, () => {
  const originalObj = {};
  const modifyedObj = {};
  expect(invert(originalObj)).toEqual(modifyedObj);
});

test(`should swap the keys and values from given object in the output object`, () => {
  const originalObj = { x: 10, y: 20 };
  const modifyedObj = { 10: "x", 20: "y" };
  expect(invert(originalObj)).toEqual(modifyedObj);
});

test(`should swap the keys and values from given object in the output object`, () => {
  const originalObj = { age: 29, name: `Ihor` };
  const modifyedObj = { 29: "age", Ihor: "name" };
  expect(invert(originalObj)).toEqual(modifyedObj);
});

test(`should swap the keys and values from given object in the output object`, () => {
  const originalObj = { a: 232, c: 101.1, 202: `h` };
  const modifyedObj = { 232: "a", 101.1: `c`, h: `202` };
  expect(invert(originalObj)).toEqual(modifyedObj);
});
