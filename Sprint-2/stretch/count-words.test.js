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

test("ignores punctuation and case", () => {
  expect(countWords("Hello, world! hello World!")).toEqual(
    Object.assign(Object.create(null), {
      hello: 2,
      world: 2,
    })
  );
});

test("handles repeated spaces", () => {
  expect(countWords("      Hello World      ")).toEqual(
    Object.assign(Object.create(null), {
      hello: 1,
      world: 1,
    })
  );
});

test("handles words like constructor", () => {
  expect(countWords("constructor constructor")).toEqual(
    Object.assign(Object.create(null), {
      constructor: 2,
    })
  );
});
