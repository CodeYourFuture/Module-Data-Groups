function tally(sumArray) {
  if (!Array.isArray(sumArray)) {
    throw new Error("Input musk be an array");
  }
  
  if (sumArray.length === 0) return {};

  let totalSum = {};
  for (const item of sumArray) {
    if (!Object.hasOwn(totalSum, item)) {
      totalSum[item] = 1;
    } else {
      totalSum[item] += 1;
    }
  }
  return totalSum;
}
module.exports = tally;
