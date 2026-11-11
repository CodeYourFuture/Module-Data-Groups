function tally(array) {
  if (!Array.isArray(array)) {
    throw new Error("tally requires an array");
  }
  const unique = {};
  for (const arr of array) {
    if (Object.hasOwn(unique, arr)) {
      unique[arr] += 1;
    } else {
      unique[arr] = 1;
    }
  }
  return unique;
}

module.exports = tally;
