function tally(array) {
  if (!Array.isArray(array)) throw new Error("array is not an array!");

  return array.reduce((accumulator, currentValue) => {
    const value = accumulator[currentValue];
    accumulator[currentValue] = value ? value + 1 : 1;
    return accumulator;
  }, {});
}

module.exports = tally;
