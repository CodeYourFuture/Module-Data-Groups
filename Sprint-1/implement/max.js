function findMax(elements) {
  let hasNumber = false;
  let max = null;

  for (let i = 0; i < elements.length; i++) {
    const value = elements[i];
    if (typeof value === "number") {
      if (!hasNumber || value > max) {
        max = value;
        hasNumber = true;
      }
    }
  }
  return max;
}

module.exports = findMax;
