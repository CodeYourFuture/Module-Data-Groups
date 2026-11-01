function calculateMean(list) {
  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
    let total = 0;
    for (let num of list) {
      total += num;
    }
    return (mean = total / list.length);
  }
}

module.exports = calculateMean;
