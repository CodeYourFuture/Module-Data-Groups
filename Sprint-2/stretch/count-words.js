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
function countWords(str) {
  let obj = {}; // create an empty object

  const arr = str
    .toLowerCase() // make a string lowercase completely
    .replace(/[^\w\s]/g, "") // delete any regex symbols from strings
    .replace(/\s+/g, " ") // handle multiple spaces
    .trim() // handle multiple spaces
    .split(" "); // convert string to an array by splitting the string into words by using " " as a delimiter

  for (const word of arr) {
    // looping through the array
    obj[word] = (obj[word] || 0) + 1; // fill up the empty object with keys (words) and values (the number of times the word appears in the value)
  }
  let entries = Object.entries(obj); // convert oject into an array to be able to sort it
  let sorted_obj = entries.sort((a, b) => b[1] - a[1]); // sorting entries in descending order

  return Object.fromEntries(sorted_obj); // convert the sorted array into object again
}

const str = "we meet Dan,,, to meet Dan Dan dan,";
console.log(countWords(str));
