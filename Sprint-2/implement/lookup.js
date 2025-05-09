function createLookup() {
  // implementation here
}

module.exports = createLookup;


//MY RESPONSES

// Implement the createLookup function

function createLookup(array) {
  // Create a lookup object that will map each item of the array to its index
  const lookup = {};
  for (let i = 0; i < array.length; i++) {
    lookup[array[i]] = i; // Assign the index as the value for each item in the array
  }
  return lookup; // Return the lookup object
}

module.exports = createLookup;

// Example usage and testing:

// Given an array
// When passed to createLookup
// Then it should return an object with each item as key and its index as value
console.log(createLookup(["apple", "banana", "cherry"]));
// Expected output: { apple: 0, banana: 1, cherry: 2 }
