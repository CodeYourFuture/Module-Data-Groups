function findMax(elements) {
  let maxElement = -Infinity;

  for (const element of elements) {
    if (typeof element === "number" && !isNaN(element)) {
      if (element > maxElement) maxElement = element;
    }
  }
  return maxElement;
}

module.exports = findMax;
