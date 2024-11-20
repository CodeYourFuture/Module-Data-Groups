
function sum(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("Input must be an array");
  }

  return elements
    .filter(item => typeof item === "number") 
    .reduce((total, num) => total + num, 0);
}

module.exports = sum;
