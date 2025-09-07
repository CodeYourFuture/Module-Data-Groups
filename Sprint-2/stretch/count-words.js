function countWords(str) {
  const counts = {};

  // Step 1: Normalize the input
  // - Convert to lowercase
  // - Remove punctuation
  const cleanedStr = str
    .toLowerCase()
    .replace(/[.,!?]/g, "") // remove basic punctuation
    .trim();

  // Step 2: Split into words
  const words = cleanedStr.split(/\s+/); // split by any space(s)

  // Step 3: Count each word
  for (const word of words) {
    if (word) {
      counts[word] = (counts[word] || 0) + 1;
    }
  }

  return counts;
}

// Example usage:
console.log(countWords("You and me, and you!")); 
// Output: { you: 2, and: 2, me: 1 }
