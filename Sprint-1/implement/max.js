function findMax(elements) {
  const numbersOnly = elements.filter(
    (e) => typeof e === "number" && Number.isFinite(e)
  );

  if (numbersOnly.length === 0) {
    return -Infinity;
  }

  let max = numbersOnly[0];

  for (let i = 1; i < numbersOnly.length; i++) {
    if (numbersOnly[i] > max) {
      max = numbersOnly[i];
    }
  }

  return max;
}
module.exports = findMax;
