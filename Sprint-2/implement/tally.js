function tally(countFrequency) {
  if (!Array.isArray(countFrequency)) {
    throw new Error("Input must be an array");
  }

  if (countFrequency.length === 0) {
    return {};
  }

  const result = {};
  for (item of countFrequency) {
    if (result[item]) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  }
  return result;
}
console.log(tally(["a", "a", "a"]));

module.exports = tally;
