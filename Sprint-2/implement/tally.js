function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input");
  }
  const count = {};
  for (const item of arr) {
    count[item] = (count[item] || 0) + 1;
  }
  return count;
}

module.exports = tally;
