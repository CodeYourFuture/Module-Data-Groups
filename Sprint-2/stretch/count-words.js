function countWords(sentence) {
  if (!sentence.trim()) {
    return {};
  }

  const wordCounts = {};

  // Use regex to split by any sequence of non-word characters
  const words = sentence.toLowerCase().split(/\W+/).filter(Boolean); // Remove empty strings

  words.forEach((word) => {
    wordCounts[word] = (wordCounts[word] || 0) + 1; // Increment word count
  });

  // Sort the word counts by frequency in descending order
  const sortedWordCounts = Object.entries(wordCounts)
    .sort((a, b) => b[1] - a[1])
    .reduce((acc, [word, count]) => {
      acc[word] = count;
      return acc;
    }, {});

  return sortedWordCounts;
}

module.exports = countWords;
