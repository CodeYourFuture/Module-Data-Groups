function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Invalid input");
  }

  const result = {};

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
