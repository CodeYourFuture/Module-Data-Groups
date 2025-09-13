function tally(items) {
  if (!Array.isArray(items)) {
    throw new Error("Input must be an array");
  }

  const result = {};
  for (const item of items) {
    if (Object.prototype.hasOwnProperty.call(result, item)) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
  return result;
}

module.exports = tally;

