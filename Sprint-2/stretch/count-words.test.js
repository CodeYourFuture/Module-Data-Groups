const countWords = require("./count-words.js");

describe("count words", () => {
  test("It will return an empty object if the param is an empty string", () => {
    const str = "";
    const currentOutput = countWords(str);
    const targetOutput = {};
    expect(currentOutput).toEqual(targetOutput);
  });

  test("It will throw an error if param is not of type string", () => {
    const str = 12;
    const targetOutput = "Param must be of type string";
    expect(() => {
      countWords(str);
    }).toThrow(targetOutput);
  });

  test("It will return an object with counts of each word when str param is not empty", () => {
    const str = "CYF is a great charity CYF is an amazing charity";
    const currentOutput = countWords(str);
    const targetOutput = {
      cyf: 2,
      is: 2,
      a: 1,
      great: 1,
      charity: 2,
      an: 1,
      amazing: 1,
    };
    expect(currentOutput).toEqual(targetOutput);
  });

  test("It will return an object with punctuations removed", () => {
    const str = "hello? hello! CYF?";
    const currentOutput = countWords(str);
    const targetOutput = { hello: 2, cyf: 1 };
    expect(currentOutput).toEqual(targetOutput);
  });

  test("It will return an object with punctuations removed and uppercase ignored", () => {
    const str = "Hello? hello! CYF? cyf";
    const currentOutput = countWords(str);
    const targetOutput = { hello: 2, cyf: 2 };
    expect(currentOutput).toEqual(targetOutput);
  });

  test("It will return the most common input in order", () => {
    const str = "hi hello hi hi, a a a a";
    const currentOutput = countWords(str);
    const targetOutput = { a: 4, hi: 3, hello: 1 };
    expect(currentOutput).toEqual(targetOutput);
  });
});
