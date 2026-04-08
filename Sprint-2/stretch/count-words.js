function countWords(str) {
  // handle empty or invalid input
  if (typeof str !== "string") {
    throw new Error("Expected a string");
  }

  // 1. clean string (remove punctuation + lowercase)
  const cleanStr = str.replace(/[.,!?]/g, "").toLowerCase();

  // 2. split into words
  const words = cleanStr.split(" ");

  // 3. count words
  const result = {};
  for (const word of words) {
    if (word !== "") {
      result[word] = (result[word] || 0) + 1;
    }
  }

  return result;
}

module.exports = countWords;
