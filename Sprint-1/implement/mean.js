function calculateMean(list) {
  if (list.length === 0) {
    throw new Error("calculateMean requires a non-empty array");
  }

  const copyList = Array.from(list);
  let total = 0;
  for (let i = 0; i < copyList.length; i++) {
    total += copyList[i];
  }
  return total / copyList.length;
}

module.exports = calculateMean;
