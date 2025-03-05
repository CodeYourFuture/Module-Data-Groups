

function dedupe(arr) {
  const uniqueArray = [];
  const seen = new Set();  // Corrected from 'setImmediate' to 'Set'

  for (const item of arr) {
    if (!seen.has(item)) {  // Check if the item is already in the Set
      uniqueArray.push(item);  // If not, add it to the result array
      seen.add(item);  // Add the item to the Set to track it
    }   
  }

  return uniqueArray;  // Return the array with unique values
}
