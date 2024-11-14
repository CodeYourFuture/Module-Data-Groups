function countWords(str) {
  // Remove punctuation and convert the string to lowercase
  const cleanedStr = str.replace(/[.,!?]/g, '').toLowerCase();
  
  // Split the cleaned string into words
  const words = cleanedStr.split(/\s+/); // Split by any whitespace
  
  // Initialize an object to store word counts
  const wordCounts = {};
  
  // Loop through each word
  words.forEach(word => {
    if (wordCounts[word]) {
      // If the word already exists in the object, increment its count
      wordCounts[word] += 1;
    } else {
      // Otherwise, set its count to 1
      wordCounts[word] = 1;
    }
  });
  
  return wordCounts;
}
