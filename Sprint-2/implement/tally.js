function tally() {}

module.exports = tally;


//MY RESPONSE

// Function to tally occurrences of items in an array

function tally(array) {
    const count = {}; // Initialize an empty object to store the counts
    
    // Loop through the array to count occurrences
    for (const item of array) {
      count[item] = (count[item] || 0) + 1; // If item exists, increment count, else initialize it as 1
    }
  
    return count; // Return the object with tally counts
  }
  
  module.exports = tally;
  
  // Example usage:
  
  console.log(tally(["apple", "banana", "apple", "orange", "banana", "apple"]));
  // Expected output: { apple: 3, banana: 2, orange: 1 }
  