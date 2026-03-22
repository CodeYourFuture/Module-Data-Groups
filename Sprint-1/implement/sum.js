function sum(elements) {
  const numbersOnly = elements.filter(
    (element) => typeof element === "number" && !isNaN(element)
  );

  if (numbersOnly.length === 0) {
    return 0;
  }
  return Number(numbersOnly.reduce((acc, curr) => acc + curr, 0).toFixed(1));
}

module.exports = sum;
