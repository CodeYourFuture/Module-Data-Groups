const invert = require("./invert.js");

describe("tests to see if invert function swaps around the keys and values in a given object", () => {
  test("if invert is passed a value which is not an object, it should throw an error", () => {
    expect(() =>
      invert([
        ["x", 10],
        ["y", 20],
      ])
    ).toThrow("error invalid input entered, expecting an object");
  });

  test("if we are passed an empty object we should return an empty object", () => {
    expect(invert({})).toEqual({});
  });

  test("given an object with key value pairs, it should swap the keys and values in the object", () => {
    expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
    expect(
      invert({ city: "Birmingham", population: "345908", boroughs: "20" })
    ).toEqual({ Birmingham: "city", 345908: "population", 20: "boroughs" });
  });
});

/*
test("if invert is passed an object which has an array or object as one of its values, it should throw an error", () => {
    expect(() => invert({ cars: { toyota: 2, bmw: 1, benz: 4 } })).toThrow(
      "error invalid input entered, expecting an object to have only strings as values"
    );
  });
*/
