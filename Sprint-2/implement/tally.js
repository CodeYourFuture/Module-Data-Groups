function tally(items) {
  const result = {};
  if (!Array.isArray(items)) {
    throw new Error("Invalid input!");
  }
  for (const item of items) {
    result[item] = (result[item] || 0) + 1;
  }
  return result;
}

module.exports = tally;
