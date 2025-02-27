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
  const myObj = {}
  const strClean = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ")
  const myArr = strClean.split(' ')
  for (const i of myArr) {
    myObj[i] = (myObj[i] || 0) + 1
  }
  const myArr2 = Object.entries(myObj)
  console.log(myArr2);
  const myArr2Sorted = myArr2.sort((a, b) => b[1] - a[1])
  const myObjSorted = Object.fromEntries(myArr2Sorted)
  return myObjSorted
}

console.log(countWords("you and@ me and you and me you me me")); 