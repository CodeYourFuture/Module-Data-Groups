function findMax(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("findMax requires an array of numbers");
  }
  for (const value of elements) {
    if (typeof value !== "number") {
      throw new Error("findMax requires an array of numbers");
    }
  }

  const arrLength = elements.length;
  let maxNum = elements[0];
  if (arrLength === 0) {
    return [-Infinity];
  }
  if (arrLength === 1) {
    return elements[0];
  }
  for (const item of elements) {
    if (maxNum < item) {
      maxNum = item;
    }
  }
  return maxNum;
}
module.exports = findMax;
