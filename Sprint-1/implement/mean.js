function calculateMean(list) {
  const copyList = Array.from(list);
  let total = 0;
  for (let i = 0; i < copyList.length; i++) {
    total += copyList[i];
  }
  return total / copyList.length;
}

module.exports = calculateMean;
