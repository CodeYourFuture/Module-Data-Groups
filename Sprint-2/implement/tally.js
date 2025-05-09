function tally(items) {
  if (!Array.isArray(items)) { 
    throw new Error("Input must be an array"); // Throw an error for invalid input
  }

  const count = {}; // Create an empty object to store the counts
  
  for (let i = 0; i < items.length; i++) { // Iterate through the array
    const item = items[i];
    if (count[item] === undefined) { // Check if the item is not already in the object
      count[item] = 1; // Initialize the count to 1
    } else {
      count[item]++; // Increment the count
    }
  }

  return count; // Return the final tally
}


module.exports = tally;
