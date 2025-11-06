function dedupe() {
  // Return empty array if input is not an array
  if (!Array.isArray(array)) {
    return [];
  }

  // Use Set to track seen elements and filter duplicates
  const seen = new Set();
  const result = [];

  for (const item of array) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }

  return result;
}
