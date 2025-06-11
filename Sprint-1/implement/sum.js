function sum(elements) {
  if (!Array.isArray(elements)) return null;
  if (elements.length === 0) return 0;
  const numbersOnly = elements.filter(
    (element) => typeof element === "number" && !isNaN(element)
  );
  if (numbersOnly.length === 0) return undefined;
  return numbersOnly.reduce((total, current) => total + current, 0);
}

module.exports = sum;
