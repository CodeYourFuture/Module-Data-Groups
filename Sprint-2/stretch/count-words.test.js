const countWords = require("./count-words.js");

test("counts words correctly", () => {
  expect(countWords("you and me and you")).toEqual({
    you: 2,
    and: 2,
    me: 1,
  });
});

test("returns empty object for empty string", () => {
  expect(countWords("")).toEqual({});
});
