function findMax(elements) {
  if (!Array.isArray(elements) || elements.length === 0) {
    return null;
  }

  let max = elements[0];

  for (let i = 1; i < elements.length; i++) {
    if (elements[i] > max) {
      max = elements[i];
    }
  }

  return max;
}

module.exports = findMax;
