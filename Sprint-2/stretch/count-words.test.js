const countWords = require("./count-words");

test("counts the number of times each word appears in a string", () => {
  const input = "you and me and you";
  const expectedOutput = { you: 2, and: 2, me: 1 };
  expect(countWords(input)).toEqual(expectedOutput);
});

test("handles punctuation and case sensitivity", () => {
  const input = "Hello, hello! How are you? You look well.";
  const expectedOutput = { hello: 2, how: 1, are: 1, you: 2, look: 1, well: 1 };
  expect(countWords(input)).toEqual(expectedOutput);
});

test("handles an empty string", () => {
  const input = "";
  const expectedOutput = {};
  expect(countWords(input)).toEqual(expectedOutput);
});

test("handles a string with only punctuation", () => {
  const input = "!!!,,,???";
  const expectedOutput = {};
  expect(countWords(input)).toEqual(expectedOutput);
});

test("handles a string with multiple spaces", () => {
  const input = "   you   and   me   ";
  const expectedOutput = { you: 1, and: 1, me: 1 };
  expect(countWords(input)).toEqual(expectedOutput);
});

test("handles a string with numbers and special characters", () => {
  const input = "hello123 world! @hello";
  const expectedOutput = { hello123: 1, world: 1, hello: 1 };
  expect(countWords(input)).toEqual(expectedOutput);
});
