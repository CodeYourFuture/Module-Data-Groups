function calculateMean(list) {
  const sum = list.reduce((acc, num) => acc + num, 0);
  return sum / list.length;
}

module.exports = calculateMean;


// module.exports = { calculateMean };