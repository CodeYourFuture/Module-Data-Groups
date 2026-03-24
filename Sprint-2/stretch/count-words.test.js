const countWords = require("./count-words.js");

describe("countWords()", () => {
  test("counts repeated words", () => {
    expect(countWords("you and me and you")).toEqual({
      you: 2,
      and: 2,
      me: 1,
    });
  });

  test("handles punctuation stuck to words", () => {
    expect(countWords("Hello,World! Hello World!")).toEqual({
      hello: 2,
      world: 2,
    });
  });

  test("handles inherited-property words safely", () => {
    expect(countWords("constructor constructor")).toEqual({
      constructor: 2,
    });
  });

  test("handles extra spaces correctly", () => {
    expect(countWords("          Hello World      ")).toEqual({
      hello: 1,
      world: 1,
    });
  });
});
