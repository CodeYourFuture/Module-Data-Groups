// Using Array.filter with a Set to track seen values and remove duplicates 
// while maintaining original order
// It passes all test cases including edge cases like empty arrays and type-sensitive inputs.

function dedupe(array) {
  if (!Array.isArray(array)) return [];

  const seen = new Set();
  return array.filter(item => {
    if (seen.has(item)) return false;
    seen.add(item);
    return true;
  });
}
  
  module.exports = dedupe;
  

