function sum(elements) {
    if (!Array.isArray(elements)) // If input is not an array, return 0.
        return 0; 

  return elements // Filter to include only real numbers and then sum them
    .filter(item => typeof item === "number" && !isNaN(item))
    .reduce((acc, curr) => acc + curr, 0); // Using reduce to add up the filtered numbers, starting from 0.
}
module.exports = sum;
  