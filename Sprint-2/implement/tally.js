function tally(sumArray) {
  if (sumArray.length === 0) return {} ;
  if (!Array.isArray(sumArray)){
    throw new Error("Input musk be an array")
  }
  let totalSum = {};
  for (const item of sumArray) {
    if (totalSum[item] === undefined) {
      totalSum[item] = 1;
    } else {
      totalSum[item] += 1;
    }
  }
  return totalSum;
}

module.exports = tally;
