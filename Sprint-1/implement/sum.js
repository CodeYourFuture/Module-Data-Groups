function sum(elements) {
  if (!Array.isArray(elements)) {
    throw new TypeError("Input must be an array");
  }
  
  return elements
    .filter((el) => typeof el === "number") // Keep only numbers
    .reduce((acc, num) => acc + num, 0);   // Sum them up, starting with 0
}

module.exports = sum;
