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
function countWords(yourWords) {
  const countObj = {};
  //remove regex with punctuation

  const removePunctuation = yourWords.replace(/[.,!]?/g, "");
  const removeMultipleSpace = removePunctuation.replace(/\s+/g, " ");
  // console.log(removeMultipleSpace);
  //change to upperCase
  const changeCapital = removeMultipleSpace.toUpperCase().trim();
  const changeArray = changeCapital.split(" ");
  // console.log(changeArray);
  changeArray.map((ele) => {
    if (countObj[ele]) {
      countObj[ele] += 1;
    } else {
      countObj[ele] = 1;
    }
  });
  return countObj;
}
console.log(countWords("You. and. me! and, you. i"));
console.log(countWords("A                             A.A A"));
console.log(countWords("A.A.A"));

module.exports = countWords;
