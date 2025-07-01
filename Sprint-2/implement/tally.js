function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  const result = {};

  // Build array of unique items
  const uniqueItems = [...new Set(items)];

  // Loop through each unique item
  for (let i = 0; i < uniqueItems.length; i++) {
    const currentItem = uniqueItems[i];
    let count = 0;

    // Count how many times it appears in the original array
    for (let j = 0; j < items.length; j++) {
      if (items[j] === currentItem) {
        count++;
      }
    }

    // Add the item and count to result
    result[currentItem] = count;
  }

  return result;
}

module.exports = tally;