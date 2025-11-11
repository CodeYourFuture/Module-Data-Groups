function findMax(elements) {
  const elementsClone = [...elements];

  const numericElements = elementsClone.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );
  if (numericElements.length === 0) return -Infinity;

  let max = numericElements[0];
  for (let i = 0; i < numericElements.length; i++) {
    if (max < numericElements[i]) max = numericElements[i];
  }

  return max;
}

module.exports = findMax;
