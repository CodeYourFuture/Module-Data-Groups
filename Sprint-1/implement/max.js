function findMax(elements) {
  if (elements.length === 0) {
    return Infinity;
  } else if (elements.length === 1) {
    return elements[0];
  }
  const number = elements.filter((value) => typeof value === "number");
  if (number.length === 0) {
    return undefined;
  }
  let max = elements[0];
  for (let i = 0; i < elements.length; i++) {
    if (max < elements[i]) {
      max = elements[i];
    }
  }
  return max;
}

module.exports = findMax;
