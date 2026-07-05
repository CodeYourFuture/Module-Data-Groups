function findMax(elements) {
  if (!Array.isArray(elements)) {
    return Infinity;
  }

  const onlyNumbers = elements.filter((item) => typeof item === "number");

  if (onlyNumbers.length === 0) {
    return Infinity;
  }

  if (elements === "number") {
    return elements;
  }

  let Max = onlyNumbers[0];
  for (let i = 0; i < onlyNumbers.length; i++) {
    if (onlyNumbers[i] > Max) {
      Max = onlyNumbers[i];
    }
  }
  return Max;
}

module.exports = findMax;
