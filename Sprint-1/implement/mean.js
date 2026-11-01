function calculateMean(list) {
  let total = 0;
  for (let num of list) {
    total += num;
  }
  return (mean = total / list.length);
}

module.exports = calculateMean;
