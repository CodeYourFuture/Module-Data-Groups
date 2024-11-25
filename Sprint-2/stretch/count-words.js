function countWords(str) {
  // Remove punctuation and split the string into words
  const cleanedStr = str.replace(/[^\w\s]/g, '').toLowerCase(); // Remove punctuation and convert to lowercase
  const words = cleanedStr.split(/\s+/); // Split by whitespace
  
  // Initialize an empty object to store word counts
  const wordCount = {};
  
  // Loop through the words array and count occurrences
  for (const word of words) {
    // If the word already exists in the object, increment the count
    if (wordCount[word]) {
      wordCount[word] += 1;
    } else {
      // If it's the first occurrence, initialize the count to 1
      wordCount[word] = 1;
    }
  }

  return wordCount;
}

// Example usage:
console.log(countWords("you and me and you")); 
// Expected output: { you: 2, and: 2, me: 1 }

console.log(countWords("you and me and you")); 
// { you: 2, and: 2, me: 1 }

console.log(countWords("This is a test. This is only a test.")); 
// { this: 2, is: 2, a: 2, test: 2, only: 1 }

console.log(countWords("Hello, hello! How are you? You are great!"));
// { hello: 2, you: 2, are: 2, how: 1, great: 1 }


