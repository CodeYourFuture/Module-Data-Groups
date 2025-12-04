function findMax(elements) {
  if (elements.length === 0) {
    return -Infinity;
  } else if (elements.length === 1 && typeof elements[0] === "number") {
    return elements[0];
  }
  const maxEl = Math.max(
    ...elements.filter((el) => typeof el === "number" && !isNaN(el))
  );

  if (elements.length > 1) {
    return maxEl;
  }
}

module.exports = findMax;
