function findMax(elements) {
  if (elements.length === 0) {
    return -Infinity;
  } else if (elements.length === 1) {
    return elements[0];
  }
  if (elements.every((element) => typeof element !== "number")) {
    return NaN;
  }
  let filteredElements = elements.filter(
    (element) => typeof element === "number"
  );
  let orderedElements = filteredElements.sort((a, b) => a - b);
  return orderedElements[orderedElements.length - 1];
}

module.exports = findMax;
