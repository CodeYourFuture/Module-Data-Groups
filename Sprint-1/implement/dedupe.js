// dedupe.js
function dedupe(array) {
  // Use a Set to remove duplicates and spread it back into an array
  return [...new Set(array)];
}

module.exports = dedupe;
