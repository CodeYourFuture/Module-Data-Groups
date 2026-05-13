function tally(array) {
  if (!Array.isArray(array)) {
    throw new Error("Invalid array");
  }
  tally = {};
  array.forEach((item) => {
    if (item in tally) {
      tally[item] += 1;
    } else tally[item] = 1;
  });
  return tally;
}

module.exports = tally;
