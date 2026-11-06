function findMax(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("findMax requires an array of numbers");
  }
  for (const value of elements) {
    if (!Number.isFinite(value)) {
      throw new Error("findMax requires an array of numbers");
    }
  }

  const arrLength = elements.length;
  let maxNum = -Infinity;
  if (arrLength === 0) {
    return [-Infinity];
  }

  for (const item of elements) {
    if (maxNum < item) {
      maxNum = item;
    }
  }
  return maxNum;
}
module.exports = findMax;
