function sum(elements) {
  if (elements.length === 0) {
    return 0;
  }
  const numbersOnly = elements.filter((element) => Number.isFinite(element));
  if (numbersOnly.length === 0) {
    return Infinity;
  }
  return numbersOnly.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
/**
 * Check if the difference between summation value and expected value
 * is within the range of the tolerance
 */
function closeEnough(a, b, tolerance = 0.0001) {
  return Math.abs(a - b) < tolerance;
}

console.log(sum([0.005, 0.6, 1.2]));

module.exports = { sum, closeEnough };
