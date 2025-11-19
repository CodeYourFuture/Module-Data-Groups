function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  const result = Object.create(null); // Create a clean object with no prototype

  for (const item of items) {
    if (result[item]) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  }

  return result;
}
module.exports = tally;
