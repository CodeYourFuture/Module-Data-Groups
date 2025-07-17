//I used a Set to track seen values while looping to preserve order. 
// It passes all test cases including edge cases like empty arrays and type-sensitive inputs.

function dedupe(array) {
    if (!Array.isArray(array)) return [];
  
    const seen = new Set();
    const result = [];
  
    for (const item of array) {
      if (!seen.has(item)) {
        seen.add(item);
        result.push(item);
      }
    }
  
    return result;
  }
  
  module.exports = dedupe;
  

