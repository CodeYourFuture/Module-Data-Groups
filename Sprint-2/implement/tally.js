function tally(items) {
    // Handle invalid input
    if (!Array.isArray(items)) {
      throw new Error("Invalid input: Expected an array");
    }
  
    // Create an empty object to store the counts
    const result = {};
  
    // Iterate over each item in the array
    for (const item of items) {
      // If the item is already in the result object, increment its count
      if (result[item]) {
        result[item]++;
      } else {
        // Otherwise, add the item to the result object with a count of 1
        result[item] = 1;
      }
    }
  
    // Return the result object
    return result;
  }
  
  module.exports = tally;