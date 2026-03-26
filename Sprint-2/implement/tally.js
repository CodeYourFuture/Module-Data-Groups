function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  const result = Object.create(null);

  for (const item of arr) {
    if (result[item] === undefined) {
      result[item] = 1;
    } else {
      result[item] = result[item] + 1;
    }
  }

  return result;
}

module.exports = tally;
