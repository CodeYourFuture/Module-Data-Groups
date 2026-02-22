function calculateMedian(list) {
  if (!Array.isArray(list)) return null;

  const numericValues = list.filter((val) => typeof val === "number");
  if (numericValues.length === 0) return null;

  const sortedList = numericValues.toSorted((a, b) => a - b);
  const middleIndex = Math.floor(sortedList.length / 2);
  let median;

  if (sortedList.length % 2 === 1) {
    median = sortedList[middleIndex];
  } else {
    median = (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  }
  return median;
}
module.exports = calculateMedian;
