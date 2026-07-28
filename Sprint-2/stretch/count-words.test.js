const countWords = require("./count-words.js");

test("counts how many times each word appears", () => {
  expect(countWords("you and me and you")).toEqual({
    you: 2,
    and: 2,
    me: 1,
  });
});

test("ignores capital letters and punctuation", () => {
  expect(countWords("Hello, hello! How are you?")).toEqual({
    hello: 2,
    how: 1,
    are: 1,
    you: 1,
  });
});

test("returns an empty object for an empty string", () => {
  expect(countWords("")).toEqual({});
});