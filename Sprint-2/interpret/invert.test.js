const invert = require("./invert.js");

describe("invert key value pairs", () => {
  test("It will return an empty object if the param is an empty object", () => {
    const obj = {};
    const currentOutput = invert(obj);
    const targetOutput = {};
    expect(currentOutput).toEqual(targetOutput);
  });

  test("It will return an object with the keys and values swapped when param object contains only one key-value pair", () => {
    const obj = { a: 1 };
    const currentOutput = invert(obj);
    const targetOutput = { 1: "a" };
    expect(currentOutput).toEqual(targetOutput);
  });

  test("It will return an object with the keys and values swapped when param object contains multiple key-value pair", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const currentOutput = invert(obj);
    const targetOutput = { 1: "a", 2: "b", 3: "c" };
    expect(currentOutput).toEqual(targetOutput);
  });

  test("It will throw an error if param is not plain object", () => {
    const obj = "hello";
    const targetOutput =
      "param is not valid data type. Invert must receive an object";
    expect(() => {
      invert(obj);
    }).toThrow(targetOutput);
  });
});
