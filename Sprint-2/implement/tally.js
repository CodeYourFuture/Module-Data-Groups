function tally(arr) {
  // Check if the input is not an array
  if (!Array.isArray(arr)) {
    // If it's not an array, stop the function and return an error message
    
    throw new Error("Input must be an array");
  }

  // Create an empty object with no interited properties to store
  // This prevents conflicts with built in properties like "toString"
  const counts = Object.create(null);

  // Loop through each item in the array one by one
  for (const item of arr) {
    // If the item already exists in counts, add 1 to it
    // If it doesn't exist yet (undefined), start it at 0 then add 1
    counts[item] = (counts[item] || 0) + 1;
  }
  // Return the finished counts object once all items have been tallied
  return counts;
}

module.exports = tally;
