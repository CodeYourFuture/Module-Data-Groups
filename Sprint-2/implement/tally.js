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

    // If the item is already a key in 'result', add its count
    // Otherwise, create it and give it a count of 1
    if (result[currentItem]) {
      result[currentItem]++;
    } else {
      result[currentItem] = 1;
    }
  };
  
  return result;
}

module.exports = tally;