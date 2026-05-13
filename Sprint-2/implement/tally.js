function tally(array) {
  if (!Array.isArray(array)) {
    throw new Error("Invalid array");
  }
  const count = Object.create(null);
  array.forEach((item) => {
    if (item in count) {
      count[item] += 1;
    } else count[item] = 1;
  });
  return count;
}

module.exports = tally;
