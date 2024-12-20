const countWords = require("./count-words");

describe("countWords()", () => {

    test("Give a string containing unique words, it should return the key (word) and the number (value) of times the word appears", () => {
        expect(countWords("you and me and you")).toEqual({ you: 2, and: 2, me: 1 })
    });

    test("Give a string containing repeated words, it should return the key (word) and the number (value) of times the word appears, in order of most common word", () => {
        expect(countWords("apple orange apple orange apple")).toEqual({ apple: 3, orange: 2 })
    });

    test("Give an empty string, it should return an empty object", () => {
        expect(countWords("")).toEqual({})
    });

    test("Give a string with punctuation, it should ignore or remove punctuation", () => {
        expect(countWords("apple, orange. apple! orange? apple")).toEqual({ apple: 3, orange: 2 })
    });
});