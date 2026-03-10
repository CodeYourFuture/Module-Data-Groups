const countWords = require("./count-words.js");

test("counts repeated words", () => {
  expect(countWords("you and me and you")).toEqual({
    you: 2,
    and: 2,
    me: 1,
  });
});

test("ignores case and punctuation", () => {
  expect(countWords("Hello, hello! HELLO?")) .toEqual({
    hello: 3,
  });
});

test("returns empty object for empty input", () => {
  expect(countWords("")).toEqual({});
});
