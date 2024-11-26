// Import the function (if it's in a different file, adjust the path)
const countWords = require('./count-words'); // Adjust this based on your setup

describe("countWords", () => {
  test("counts words in a simple string", () => {
    const input = "hello world hello";
    const expectedOutput = { hello: 2, world: 1 };
    expect(countWords(input)).toEqual(expectedOutput);
  });

  test("handles punctuation correctly", () => {
    const input = "Hello, world! Hello.";
    const expectedOutput = { hello: 2, world: 1 };
    expect(countWords(input)).toEqual(expectedOutput);
  });

  test("is case insensitive", () => {
    const input = "HELLO Hello hello";
    const expectedOutput = { hello: 3 };
    expect(countWords(input)).toEqual(expectedOutput);
  });

  test("handles an empty string", () => {
    const input = "";
    const expectedOutput = {};
    expect(countWords(input)).toEqual(expectedOutput);
  });

  test("handles strings with only punctuation", () => {
    const input = "!!!,,,###";
    const expectedOutput = {};
    expect(countWords(input)).toEqual(expectedOutput);
  });

  test("handles strings with multiple spaces", () => {
    const input = "   hello    world   hello ";
    const expectedOutput = { hello: 2, world: 1 };
    expect(countWords(input)).toEqual(expectedOutput);
  });

  test("handles strings with numbers", () => {
    const input = "hello world 123 hello 123";
    const expectedOutput = { hello: 2, world: 1, "123": 2 };
    expect(countWords(input)).toEqual(expectedOutput);
  });
});
