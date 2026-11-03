function findMax(elements) {
  if (
    !Array.isArray(elements) ||
    elements.some((element) => typeof element !== "number")
  ) {
    throw new Error("findMax requires an array of numbers");
  }
  return elements.reduce(
    (max, element) => (element > max ? element : max),
    -Infinity
  );
}

module.exports = findMax;
