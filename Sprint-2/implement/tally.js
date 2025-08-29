// It loops over each item in the array.

// If the item is already in the counts object, it increments the count.

// If not, it initializes it with 1.

function tally(items) {
    if (!Array.isArray(items)) {
      throw new Error("Input must be an array");
    }
  
    const counts = Object.create(null); // No inherited properties
  
    for (const item of items) {
      counts[item] = (counts[item] || 0) + 1;
    }
  
    return counts;
  }
  

module.exports = tally;




