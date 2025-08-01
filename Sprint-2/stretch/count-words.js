/*
  Count the number of times a word appears in a given string.

  Write a function called countWords that
    - takes a string as an argument
    - returns an object where
          - the keys are the words from the string and
          - the values are the number of times the word appears in the string

  Example
  If we call countWords like this:

  countWords("you and me and you") then the target output is { you: 2, and: 2, me: 1 }

  To complete this exercise you should understand
    - Strings and string manipulation
    - Loops
    - Comparison inside if statements
    - Setting values on an object

## Advanced challenges

1. Remove all of the punctuation (e.g. ".", ",", "!", "?") to tidy up the results

2. Ignore the case of the words to find more unique words. e.g. (A === a, Hello === hello)

3. Order the results to find out which word is the most common in the input
*/

const countWords = (str) => {
  if (str.trim().length === 0) {
    return 0;
  }
  const words = str.split(" ");
  const counts = Object.create(null);

  for (const eachWord of words) {
    if (eachWord in counts) {
      counts[eachWord]++;
    } else {
      counts[eachWord] = 1;
    }
  }

  return counts;
};

console.log(countWords("you and me and you")); // { you: 2, and: 2, me: 1 }
console.log(countWords("hello world hello")); // { hello: 2, world: 1 }
console.log(countWords("this is a test this is only a test")); // { this: 2, is: 2, a: 2, test: 2, only: 1 }
console.log(countWords("")); // 0
console.log(countWords("   ")); // 0
console.log(countWords("one two three one two")); // { one: 2, two: 2, three: 1 }
console.log(countWords("apple banana apple orange banana apple")); // { apple: 3, banana: 2, orange: 1 }
console.log(countWords("The quick brown fox jumps over the lazy dog")); // { The: 1, quick: 1, brown: 1, fox: 1, jumps: 1,
// over: 1, the: 1, lazy: 1, dog: 1 }

console.log(countWords("0 1 2 3 4 5 6 6 6 6 7 7 7 7 7 7 8 9 9 9 0 0")); // { '0': 2, '1': 1, '2': 1, '3': 1, '4': 1, '5': 1, '6': 1, '7': 1, '8': 1, '9': 1 }
console.log(JSON.stringify(countWords("constructor constructor constructor"))); // { constructor: 3 }
