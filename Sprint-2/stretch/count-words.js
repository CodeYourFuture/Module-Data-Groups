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
  // Split the string into words
  const words = str.split(/\s+/);
  
  // Create an object to hold the word counts
  const wordCount = {};

  // Loop through each word
  for (const word of words) {
    // Normalize the word to lowercase and remove punctuation
    const cleanWord = word.toLowerCase().replace(/[.,!?]/g, '');
    
    // If the word is not in the object, add it with a count of 1
    if (!wordCount[cleanWord]) {
      wordCount[cleanWord] = 1;
    } else {
      // If it exists, increment the count
      wordCount[cleanWord]++;
    }
  }

  return wordCount;
}

//function countWords(str) {
//  const words = str.split(/\s+/);
//  const counts = {};

//  for (let word of words) {
//    word = word.toLowerCase().replace(/[.,!?]/g, '');
//    counts[word] = (counts[word] || 0) + 1;
//  }

//  return counts;
// }

// Example usage
const result = countWords("you and me and you");
console.log(result); // { you: 2, and: 2, me: 1 }   

console.log(countWords("Hello, hello! How are you? You are great."));
// { hello: 2, how: 1, are: 2, you: 2, great: 1 }
console.log(countWords("This is a test. This test is only a test."));
// { this: 2, is: 3, a: 2, test: 3, only: 1 }
// Example with punctuation and case insensitivity
console.log(countWords("Hello, world! Hello, everyone. Hello!"));
// { hello: 3, world: 1, everyone: 1 }  