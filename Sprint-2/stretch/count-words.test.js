const countWords = require("./count-words")

describe('countWords', () => {

test("Retuns an empty object, if the input's length is empty", () => {
  expect(countWords("")).toEqual({});
});

test("Throw an error, if the input's type is not string", () => {
  expect(() => countWords(["Danial", "Bashirzadeh", 1, null])).toThrow(
    "Input must be a string"
  );
});

test("Retuns { you: 2, and: 2, me: 1 }, if the input is 'you and me and you'", () => {
  expect(countWords("you and me and you")).toEqual({ you: 2, and: 2, me: 1 });
});

test("Handles punctuation and ignores case", () => {
    expect(countWords("Hello, hello! How are you? Are you well?")).toEqual({
      you: 2,
      are: 2,
      hello: 2,
      how: 1,
      well: 1
    });
  });


})
