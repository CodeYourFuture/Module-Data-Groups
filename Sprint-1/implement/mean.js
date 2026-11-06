function calculateMean(list) {
  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }

  let total = 0;
  for (const item of list) {
    total = total + item;
  }
  return Number(total.toFixed(2)) / list.length;
}
//console.log(n));
module.exports = calculateMean;
