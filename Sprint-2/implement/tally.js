function tally(items) {
  // 1. Check for bad inputs (like a string or number instead of an array)
  // If it's bad, throw a massive red error code!
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array!");
  }

  // 2. Create our empty chest to hold our item counts
  const countObject = {};

  // 3. Loop through every single item in the array
  for (const item of items) {
    if (countObject[item]) {
      // If the block is already in our chest, increase the stack count by 1!
      countObject[item] += 1;
    } else {
      // If it's a brand new block type, start the counter at 1!
      countObject[item] = 1;
    }
  }

  // 4. Hand back our beautifully organized chest!
  return countObject;
}

module.exports = tally;
