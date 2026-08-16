function findMax(elements) {
  if (elements.length === 0) return -Infinity;

  const filteredArray = elements.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );
  if (filteredArray.length === 0) return null;
  const sortedArray = filteredArray.sort((a, b) => a - b);
  const maxArrayValue = sortedArray[sortedArray.length - 1];
  return maxArrayValue;
}

module.exports = findMax;
