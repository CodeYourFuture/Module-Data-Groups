function findMax(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("Input must be an array");
  }

  const validNumbers = numbers.filter(item => typeof item === "number");
  return validNumbers.length > 0 ? Math.max(...validNumbers) : -Infinity;
}

module.exports = findMax;

