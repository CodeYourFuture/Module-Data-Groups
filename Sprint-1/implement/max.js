function findMax(elements) {
  let maximumNumber = -Infinity;
  for (const item of elements) {
    if (typeof item === "number" && item > maximumNumber) {
      maximumNumber = item;
    }
  }
  return maximumNumber;
}

module.exports = findMax;
