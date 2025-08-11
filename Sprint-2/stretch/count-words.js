function countWords(str) {
  // Remove punctuation and split the string into words
  const cleanedStr = str.replace(/[^\w\s]/g, '').toLowerCase(); // Remove punctuation and convert to lowercase
  const words = cleanedStr.split(/\s+/).filter(word => word); // Split by whitespace and filter out empty strings

  // Initialize an empty object to store word counts
  const wordCount = {};

  // Loop through the words array and count occurrences
  for (const word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }

  return wordCount;
}

module.exports = countWords;




