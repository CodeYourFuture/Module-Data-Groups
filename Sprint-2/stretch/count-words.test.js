const countWords = require("./count-words.js");

test('counts words in a simple sentence', () => {
  expect(countWords("you and me and you")).toEqual({ you: 2, and: 2, me: 1 });
});

test('counts words with mixed case and punctuation', () => {
  expect(countWords("Hello, hello! How are you?")).toEqual({ hello: 2, how: 1, are: 1, you: 1 });
});

test('counts words with punctuation and multiple spaces', () => {
  expect(countWords("This is a test. This is only a test.")).toEqual({ this: 2, is: 2, a: 2, test: 2, only: 1 });
});