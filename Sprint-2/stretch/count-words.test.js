const countWords = require("./count-words.js");

test("counts words regardless of case and punctuation", () => {
  expect(countWords("You, and me! AND you.")).toEqual({
    you: 2,
    and: 2,
    me: 1,
  });
});

test("handles empty input and repeated whitespace", () => {
  expect(countWords("   ")).toEqual({});
  expect(countWords("one \n  two")).toEqual({ one: 1, two: 1 });
});

test("orders words by frequency, keeping first appearance for ties", () => {
  expect(Object.keys(countWords("one two two three three"))).toEqual([
    "two",
    "three",
    "one",
  ]);
});

test("counts special property names", () => {
  expect(countWords("constructor constructor toString")).toEqual({
    constructor: 2,
    tostring: 1,
  });
});
