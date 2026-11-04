function calculateMean(list) {
  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }
  const sum = list.reduce((sum, number) => {
    return sum + number;
  }, 0);

  return sum / list.length;
}

module.exports = calculateMean;
