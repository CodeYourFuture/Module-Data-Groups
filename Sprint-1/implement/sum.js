function sum(elements) {
  // Ensure the input is an array
  if (!Array.isArray(elements)) {
    throw new Error("Input must be an array");
  }

  // filter out non-numerical values
  elements = elements.filter((element) => typeof element === "number");

  // if the array is empty, return 0
  if (elements.length === 0) {
    return 0;
  }

  return elements.reduce((acc, num) => acc + num, 0);
}

module.exports = sum;
