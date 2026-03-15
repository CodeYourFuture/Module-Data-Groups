function findMax(elements) {
  if (!Array.isArray(elements)) return null;

  if (elements.length === 0) return -Infinity;
  // must include declaration for infinity or test fails.
  const numbers = elements.filter((num) => typeof num === "number");
  if (numbers.length === 0) return NaN;
  // it returns NaN if no numbers found, there is  no need to sort the numbers
  return Math.max(...numbers);
}
//console.log(findMax([200, 5, 8, 15, 90, 12]));
module.exports = findMax;
