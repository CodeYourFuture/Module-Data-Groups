function findMax(elements) {
  // filter out non-number items from elements
  elements = elements.filter((element) => typeof element === "number");

  if (elements.length === 0) {
    return -Infinity;
  }

  // find maximum
  let max = elements[0];
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] > max) {
      max = elements[i];
    }
  }
  return max;
}

module.exports = findMax;
