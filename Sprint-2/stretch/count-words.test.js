
const countWords = require("./count-words");

test("should count words correctly", () => {
  const result = countWords("you and me and you");
  expect(result).toEqual({ you: 2, and: 2, me: 1 });
});

test("should handle empty strings", () => {
  const result = countWords("");
  expect(result).toEqual({});
});

test("should handle single word strings", () => {
  const result = countWords("hello");
  expect(result).toEqual({ hello: 1 });
});

test("should handle strings with punctuation", () => {
  const result = countWords("Hello, hello! Are you there? Hello!");
  expect(result).toEqual({ hello: 3, are: 1, you: 1, there: 1 });
});

test("should handle long sentences", () => {
  const result = countWords(
    "A quick brown fox jumps over the lazy dog. The dog was not amused."
  );
  expect(result).toEqual({
    a: 1,
    quick: 1,
    brown: 1,
    fox: 1,
    jumps: 1,
    over: 1,
    the: 2,
    lazy: 1,
    dog: 2,
    was: 1,
    not: 1,
    amused: 1,
  });
});
