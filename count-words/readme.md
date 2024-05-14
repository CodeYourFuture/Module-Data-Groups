## Word Frequency Counter

<!--```objectives
- Manipulate strings
- Use loops and conditional statements
- Create and manipulate objects
- Advanced: String manipulation, sorting objects
```-->

### Instructions

Count the number of times each word appears in a string.

Write a function called `countWords` that:

- Takes a string as an argument
- Returns an object where:
  - The keys are the words from the string
  - The values are the number of times the word appears in the string

### Example

If the function is given the input: `"you and me and you"`, the object returned would be: `{ you: 2, and: 2, me: 1 }`.

To complete this kata you should understand:

- Strings and string manipulation
- Loops or forEach
- Comparison inside if statements
- Setting values on an object

### Advanced Challenges

1. Remove all of the punctuation (e.g. ".", ",", "!", "?") to tidy up the results
2. Ignore the case of the words to find more unique words. e.g. (A === a, Hello === hello)
3. Order the results to find out which word is the most common in the chapter

```js
function countWords(string) {
  const wordCount = {};

  // write code here

  return wordCount;
}
```
