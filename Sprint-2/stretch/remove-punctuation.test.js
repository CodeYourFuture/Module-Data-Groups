const removePunctuation = require("./remove-punctuation.js");

describe("count words", () => {
  test("It will return an empty string if the param is an empty string", () => {
    const str = "";
    const currentOutput = removePunctuation(str);
    const targetOutput = "";
    expect(currentOutput).toEqual(targetOutput);
  });

  test("It will throw an error if param is not of type string", () => {
    const str = 12;
    const targetOutput = "Param must be of type string";
    expect(() => {
      removePunctuation(str);
    }).toThrow(targetOutput);
  });

  test("It will removes dot if it exist in string ", () => {
    const str = ".hello";
    const currentOutput = removePunctuation(str);
    const targetOutput = "hello";
    expect(currentOutput).toEqual(targetOutput);
  });

  test("It will removes ? if it exist in string ", () => {
    const str = ".hello? how are you?";
    const currentOutput = removePunctuation(str);
    const targetOutput = "hello how are you";
    expect(currentOutput).toEqual(targetOutput);
  });

  test("It will removes ! if it exist in string ", () => {
    const str = "hey!";
    const currentOutput = removePunctuation(str);
    const targetOutput = "hey";
    expect(currentOutput).toEqual(targetOutput);
  });

  test("It will removes comma if it exist in string ", () => {
    const str = "I,";
    const currentOutput = removePunctuation(str);
    const targetOutput = "I";
    expect(currentOutput).toEqual(targetOutput);
  });
});
