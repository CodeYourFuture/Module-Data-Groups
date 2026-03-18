function countWords(text) {
  if (typeof text !== "string") {
    throw new Error("Input must be a string");
  }

  // remove punctuation and make lowercase
  const cleanedText = text.toLowerCase().replace(/[.,!?]/g, "");

  const words = cleanedText.split(/\s+/);

  const counts = {};

  for (const word of words) {
    if (!word) continue;

    if (counts[word]) {
      counts[word]++;
    } else {
      counts[word] = 1;
    }
  }

  return counts;
}

module.exports = countWords;
