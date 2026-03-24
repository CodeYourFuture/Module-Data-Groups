/**
 * createLookup()
 *
 * Converts an array of [key, value] pairs into a lookup object.
 *
 * Example:
 * [['US', 'USD'], ['CA', 'CAD']]
 *
 * Returns:
 * { US: 'USD', CA: 'CAD' }
 */

function createLookup(pairs) {
  // Ensure the input is an array
  if (!Array.isArray(pairs)) {
    throw new Error("Expected an array of pairs");
  }

  const lookup = {};

  // Loop through each pair
  for (const pair of pairs) {
    // Validate that each pair has exactly two values
    if (!Array.isArray(pair) || pair.length !== 2) {
      throw new Error("Each item must be a [key, value] pair");
    }

    const [key, value] = pair;

    // Add to lookup object
    lookup[key] = value;
  }

  return lookup;
}

module.exports = createLookup;
