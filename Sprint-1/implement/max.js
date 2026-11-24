
function findMax(elements) {
  if (!Array.isArray(elements) || elements.some(element => typeof element !== "number")) {
    throw new Error("findMax requires an array of numbers");
  }

  let max = -Infinity;

  elements.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });

  return max;
}

module.exports = findMax;