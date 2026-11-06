function calculateMean(list) {
  let sum = 0;
  let mean = 0;
  list.forEach((item) => {
    sum = sum + item;
  });
  mean = sum / list.length;
  return Number(mean.toFixed(2));
}
module.exports = calculateMean;
