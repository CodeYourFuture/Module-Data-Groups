function tally(items) {
    // Step 1: Input validation
    if (!Array.isArray(items)) {
      throw new Error("Input must be an array");
    }
  
    // Step 2: Counting the frequency of each item
    const result = {};
    items.forEach(item => {
      result[item] = (result[item] || 0) + 1;
    });
  
    // Step 3: Return the result object
    return result;
}

module.exports = tally;
