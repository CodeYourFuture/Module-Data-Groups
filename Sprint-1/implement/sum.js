function sum(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("sum requires an array of numbers");
  }

  for (const item of elements) {
    if (!Number.isFinite(item)) {
      throw new Error("sum requires an array of numbers");
    }
  }

  if (elements.length === 0) {
    return 0;
  }

  let total = 0;

  elements.forEach((item) => {
    total += item;
  });

  return Number(total.toFixed(2));
}

module.exports = sum;
