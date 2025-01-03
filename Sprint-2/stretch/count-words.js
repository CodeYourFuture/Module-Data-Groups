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

function countWords(stringInput) {

  const stringObject = {};
  const newArray = [];
  stringInput = stringInput.toLowerCase();
  //looked up regex and can used it to replace a given amount of characters
  let cleanedStringInput = stringInput.replace(/[.,!?]/g, "");
  let arrayOfWords = cleanedStringInput.split(" ")
  //console.log(arrayOfWords)

  for (const singleWord of arrayOfWords) {
    if (newArray.includes(singleWord)) {
      //if the word exists in the object increment its value by 1
      stringObject[singleWord] += 1;
    }
    else {
      //if the word does not exist in the new array initalise the object value to 1
      newArray.push(singleWord);
      stringObject[singleWord] = 1;
    }

  }
  return stringObject;

}

// console.log(countWords("Serna Makaka is a girl"))
// console.log(countWords("you and me and you"))