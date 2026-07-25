function tally(arr) {
  const count = {};
  for (const item of arr) {
    count[item] = (count[item] || 0) + 1;
  }
  return count;
}

module.exports = tally;
