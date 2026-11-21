function findMax(elements) {
  //   if (elements.length == 1) {
  //     return elements[0];
  //   }
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
