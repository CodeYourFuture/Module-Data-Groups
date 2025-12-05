function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }
  const counts = Object.create(null); // empty object to store tally of key-value pairs
  // object.create(null) creates a new object with no inherited properties
  for (const item of items) {
    // iterate through each item in the input array
    const key = String(item); // convert item to string to use as key
    counts[key] = (counts[key] || 0) + 1; // increment count for this key
  }
  return counts; // returns the final counts object
}

module.exports = tally;

console.log(tally(["toString", "toString"]));
