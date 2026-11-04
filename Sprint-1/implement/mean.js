function calculateMean(list) {
  const sum = list.reduce((sum, number) => {
    return sum + number;
  }, 0);

  return sum / list.length;
}

module.exports = calculateMean;
