function tally(arr) {
  //  invalid input → throw error
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  //  empty array → return empty object
  if (arr.length === 0) {
    return {};
  }

  const result = {};

  //  count items
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