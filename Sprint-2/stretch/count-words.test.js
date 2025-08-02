const countWords = require("./count-words.js");

/*  Given a function called countWords that
- takes a string as an argument, removes the punctuation,ignores the case of the words, orders the resulting words by frequency
- returns an object where
      - the keys are the words from the string and
      - the values are the number of times the word appears in the string
*/

test("Given a string input, countWords ignores cases and returns orders words by frequency in an object", () => {
  const string = "Hello, world! It is you and me and you.";
  const result = countWords(string);
  expect(result).toEqual({
    you: 2,
    and: 2,
    hello: 1,
    world: 1,
    it: 1,
    is: 1,
    me: 1,
  });
});

//Given a non-string input, countWords should throw a TypeError
test.each([123, null, undefined, {}, [], true, false])(
  "Given %j, countWords throws a TypeError",
  (input) => {
    expect(() => countWords(input)).toThrow("Input must be a string");
  }
);

// Given an empty string, countWords should return an empty object
test("Given an empty string, countWords returns an empty object", () => {
  const string = "";
  const result = countWords(string);
  expect(result).toEqual({});
});
