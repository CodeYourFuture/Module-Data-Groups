function tally(array) {
  const lookup = {};

  for (const item of array) {
    if (lookup[item]) {
      lookup[item] += 1;
    } else {
      lookup[item] = 1;
    }
  }
  return lookup;
}

module.exports = tally;
