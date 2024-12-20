const countWords = require("./count-words");

describe("countWords()", () => {

    test("Give a string containing unique words, it should return the key (word) and the number (value) of times the word appears", () => {
        expect(countWords("you and me and you")).toEqual({ you: 2, and: 2, me: 1 })
    });
});