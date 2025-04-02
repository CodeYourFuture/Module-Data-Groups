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
// const regex= /[.,!?]/g;
// str.replace(regex, "");

2. Ignore the case of the words to find more unique words. e.g. (A === a, Hello === hello)
// const lowerCaseWord=word.toLowerCase();

3. Order the results to find out which word is the most common in the input
*/
function countWords(str) {
  if (str.length === 0) {
    return {};
  }
  const regex=/[.,!?]/g;
  const cleanedStringArray=str.replace(regex,"").toLowerCase().split(" ");
  let notOrderedObject={};
  for (const word of cleanedStringArray) {
    if(notOrderedObject[word]){
      notOrderedObject[word]++;
    }
    else{
      notOrderedObject[word]=1;
    }
  }
 
  //To order by the number of repeatitions of each word
  const orderedObject=Object.entries(notOrderedObject).sort((a,b)=>b[1]-a[1]).reduce((acc,[key,value])=>({...acc,[key]:value}),{});

  return orderedObject;


}
module.exports = countWords;