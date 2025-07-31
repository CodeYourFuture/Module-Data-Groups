const invert = require("./invert.js");

describe("creates a invert object", () => {
  it("the object contains one key, value pair", () => {
    const obj = { a : 1 };
    let expected = {"1":"a"};
    const result = invert(obj);
    expect(result).toEqual(expected);
  });

  it("the object contains the two pairs", () => {
    const obj = { a: 1, b: 2 };
    let expected = {"1":"a" , "2":"b"};
    const result = invert(obj);
    expect(result).toEqual(expected);
  });
});

