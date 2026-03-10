function findMax(elements) {
  if (!Array.isArray(elements)) return null;

  const numbers = elements.filter((num) => typeof num === "number");
  if (numbers.length === 0) return null;

  const sortedElements = [...numbers].sort((a, b) => a - b);

  return Math.max(...sortedElements);
}

//console.log(findMax([200, 5, 8, 15, 90, 12]));

module.exports = findMax;
