function tally(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  let result = {};

  for (const element of arr) {
    if (element in result) {
      result[element] += 1;
    } else {
      result[element] = 1;
    }
  }
  return result;
}

module.exports = tally;
