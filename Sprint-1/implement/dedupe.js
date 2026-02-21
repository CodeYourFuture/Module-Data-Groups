function dedupe(input) {
  // Check if the input is an array
  if (!Array.isArray(input)) {
    return null;
  }
  // Check for empty array
  if (input.length === 0) {
    return [];
  }
  // New array to hold deduped values
  const newArray = [];
  // Go through each element in the input array
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    // If the element is not already in newArray, add it
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
}

module.exports = dedupe;
