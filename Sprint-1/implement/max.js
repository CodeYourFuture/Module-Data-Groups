function findMax(elements) {
  if (elements.length === 0) {
    return -Infinity;
  }

  const number = elements.filter((value) => typeof value === "number");

  if (number.length === 0) {
    return undefined;
  }
  let maxNumber = number[0];
  for (let i = 1; i < number.length; i++) {
    if (number[i] > maxNumber) {
      maxNumber = number[i];
    }
  }
  return maxNumber;
}

module.exports = findMax;
