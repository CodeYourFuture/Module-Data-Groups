function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

const result = Object.create(null);
  for (const item of items) {
    if (result[item]) {
      result[item] ++;
    } else {
      result[item] = 1;
    }
  }
  return result;
}

module.exports = tally;

