/**
 * Deduplicates an array of elements (strings, numbers, etc.)
 * @param {Array} items - The array containing potential duplicates
 */

function dedupe(items) {
  return [...new Set(items)];
}

module.exports = dedupe;
