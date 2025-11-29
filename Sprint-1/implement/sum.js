function sum(elements) {
  // Validate input
  if (!Array.isArray(elements)) {
    return 0;
  }

  // Keep only valid finite numbers and accumulate them
  let total = 0;
  for (let i = 0; i < elements.length; i++) {
    if (Number.isFinite(elements[i])) {
      total += elements[i];
    }
  }

  return total;
}

module.exports = sum;
