function findMax(elements) {
  const numericElements = elements.filter(
    (el) => typeof el === "number" && !isNaN(el)
  );

  // If the array is empty after filtering, return -Infinity (consistent with Math.max on an empty array)
  if (numericElements.length === 0) {
    return -Infinity;
  }
  let max = Math.max(...elements);

  return max;
}

module.exports = findMax;
