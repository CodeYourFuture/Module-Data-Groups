function findMax(elements) {
  if (elements.length === 0) {
    return Infinity;
  } else if (elements.length === 1 && !Number.isNaN(Number(elements[0]))) {
    return elements[0];
  }
  const number = elements.filter((value) => !Number.isNaN(Number(value)));
  if (number.length === 0) {
    return undefined;
  }
  let max = number[0];
  for (let i = 0; i < elements.length; i++) {
    if (max < number[i]) {
      max = number[i];
    }
  }
  return max;
}

module.exports = findMax;
