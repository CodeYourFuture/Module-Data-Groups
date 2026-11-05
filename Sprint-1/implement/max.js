function findMax(elements) {
  if (
    !Array.isArray(elements) ||
    !elements.every(
      (element) => typeof element === "number" && !Number.isNaN(element)
    )
  ) {
    throw new Error("findMax requires an array of numbers");
  }

  let max = -Infinity;

  for (let i = 0; i < elements.length; i++) {
    if (elements[i] > max) {
      max = elements[i];
    }
  }

  return max;
}

module.exports = findMax;
