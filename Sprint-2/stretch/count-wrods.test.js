const countWords = require("./count-words");
test("countWords returns an empty object for an empty sentence", () => {
  expect(countWords("")).toEqual({});
});

test("countWords returns correct count for a sentence with one word", () => {
  expect(countWords("hello")).toEqual({ hello: 1 });
});

test("countWords counts repeated words correctly", () => {
  expect(countWords("hello hello world")).toEqual({ hello: 2, world: 1 });
});

test("countWords ignores punctuation and case sensitivity", () => {
  expect(countWords("Hello, hello! world? World.")).toEqual({
    hello: 2,
    world: 2,
  });
});

test("countWords handles multiple spaces between words", () => {
  expect(countWords("hello   hello    world")).toEqual({ hello: 2, world: 1 });
});

test("countWords handles mixed case words", () => {
  expect(countWords("Hello world world HELLO")).toEqual({ hello: 2, world: 2 });
});

test("countWords sorts words by frequency", () => {
  expect(countWords("apple orange apple banana apple orange")).toEqual({
    apple: 3,
    orange: 2,
    banana: 1,
  });
});
