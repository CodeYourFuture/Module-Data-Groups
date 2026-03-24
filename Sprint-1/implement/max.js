function findMax(elements) {
  let max = -Infinity;
  let foundNumber = false;

  for (let i = 0; i < elements.length; i++) {
    if (Number.isFinite(elements[i])) {
      foundNumber = true;

      if (elements[i] > max) {
        max = elements[i];
      }
    }
  }

  if (!foundNumber) {
    return -Infinity;
  }

  return max;
}

module.exports = findMax;