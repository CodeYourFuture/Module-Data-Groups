function findMax(elements) {
  let max = -Infinity;

  for (let i = 0; i < elements.length; i++) {
    const value = elements[i];

    // Only consider real finite numbers 
    if (typeof value === "number" && Number.isFinite(value)) {
      if (value > max) {
        max = value;
      }
    }
  }

  return max; 
}

module.exports = findMax;
