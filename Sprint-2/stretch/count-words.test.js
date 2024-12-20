const countWords = require("./count-words");

test("count words in a simple string", () => {
    expect(countWords("you and me and you")).toEqual({ you: 2, and: 2, me: 1 });
});

test("count words with punctuation", () => {
    expect(countWords("Hello, hello! How are you?")).toEqual({ hello: 2, how: 1, are: 1, you: 1 });
});


