function tally(list) {
  if (!Array.isArray(list)) {
    throw new Error("Not a valid input");
  }
  const count = {};
  for (const item of list) {
    count[item] = (count[item] || 0) + 1;
  }
  return count;
}

module.exports = tally;

