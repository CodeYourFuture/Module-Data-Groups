const countWords = require("./count-words.js");


// 1. Remove all of the punctuation (e.g. ".", ",", "!", "?") to tidy up the results
test("countWords on string with punctuation", () => {
    const str = "you and me and you!";
    const expected = { you: 2, and: 2, me: 1 };
    expect(countWords(str)).toEqual(expected);
});

// 2. Ignore the case of the words to find more unique words. e.g. (A === a, Hello === hello)
test("countWords on string with case insensitivity", () => {
    const str = "You and me and you!";
    const expected = { you: 2, and: 2, me: 1 };
    expect(countWords(str)).toEqual(expected);
});


// 3. Order the results to find out which word is the most common in the input
test("countWords on string with multiple occurrences of the same word", () => {
    const str = "ladies and gents hello hello hello";
    const expected = { hello: 3,
        ladies: 1,
        and : 1,
        gents: 1 
        
    };
     
    expect(countWords(str)).toEqual(expected);
});