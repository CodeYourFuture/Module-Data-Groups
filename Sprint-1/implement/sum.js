function sum(elements) {
  if (!Array.isArray(elements) || elements.length === 0) {
    return 0;
  }

  const numbersOnly = elements.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );


  return numbersOnly.reduce((acc, curr) => acc + curr, 0);
}

module.exports = sum;
