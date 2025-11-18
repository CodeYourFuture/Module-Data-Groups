function dedupe(arr) {
    
  if (!Array.isArray(arr)) return null;

  // Create a new result array
  const result = [];

  // Loop through original array
  for (const item of arr) {
    // Add only the first occurrence of each element
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  // Return the deduplicated array
  return result;
}

module.exports = dedupe;
