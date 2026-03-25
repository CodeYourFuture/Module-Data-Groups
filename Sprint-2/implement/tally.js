function tally(items) {
  if (!Array.isArray(items)) throw new Error("Invalid input");
  return items.reduce((acc, it) => {
    acc[it] = (acc[it] || 0) + 1;
    return acc;
  }, {});
}

module.exports = tally;
