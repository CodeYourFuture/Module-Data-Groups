// dedupe.js
// Remove duplicate values from an array, preserving the first occurrence of each element

function dedupe(arr) {
  // Return empty array if input is empty

  // Use Set to automatically remove duplicates, then spread back into an array
  // Set keeps only unique values in insertion order
  return [...new Set(arr)];
}

module.exports = dedupe;
