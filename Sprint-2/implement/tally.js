function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  const frequency = {};
  for (const item of items) {
    frequency[item] = (frequency[item] || 0) + 1;
  }
  return frequency;
}
module.exports = tally;
