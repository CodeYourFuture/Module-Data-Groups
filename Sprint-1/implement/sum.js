function sum(elements) {
  if (!Array.isArray(elements)) return 0;
  const numericElements = elements.filter(Number.isFinite)
  if (numericElements.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < numericElements.length; i++) {
    sum += numericElements[i];
  }
  return sum;
}

module.exports = sum;
