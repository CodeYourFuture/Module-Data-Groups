const countWords = require("./count-words");

test("counts word occurrences in a string", () => {
  expect(countWords("you and me and you")).toEqual({ you: 2, and: 2, me: 1 });
});

test("returns an empty object for an empty string", () => {
  expect(countWords("")).toEqual({});
});

test("ignores punctuation", () => {
  expect(countWords("Hello, world! Hello?")).toEqual({ hello: 2, world: 1 });
});

test("ignores case", () => {
  expect(countWords("A a Hello hello")).toEqual({ a: 2, hello: 2 });
});
