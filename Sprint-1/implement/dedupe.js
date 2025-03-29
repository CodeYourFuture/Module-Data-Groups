//function dedupe() {}
// dedupe.js
function dedupe(arr) {
    // Return an empty array if the input is an empty array
    if (arr.length === 0) {
      return [];
    }
  
    // Create a new array to hold the deduplicated elements
    const uniqueElements = [];
  
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
      // If the element is not already in the uniqueElements array, add it
      if (!uniqueElements.includes(arr[i])) {
        uniqueElements.push(arr[i]);
      }
    }
  
    // Return the deduplicated array
    return uniqueElements;
  }
  
  module.exports = dedupe;
  