function sum(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("sum requires an array of numbers");
  }

  if (elements.some((element) => typeof element !== "number")) {
    throw new Error("sum requires an array of numbers");
  }

  return elements.reduce((total, element) => total + element, 0);
}

module.exports = sum;
