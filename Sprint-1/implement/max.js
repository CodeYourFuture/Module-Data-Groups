function findMax(elements) {

  let max = -Infinity;
  elements.forEach((element) => {
    if (typeof element !== "number") {
      throw new Error("findMax requires an array of numbers");
    }
    if (element > max) max = element;
  });
  return max;
}

module.exports = findMax;
