function countWords(str) {
  const wordCount = {};
  const words = str
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter(Boolean);
  for (const word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }
  return wordCount;
}

module.exports = countWords;
