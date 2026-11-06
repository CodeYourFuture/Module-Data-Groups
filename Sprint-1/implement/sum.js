function sum(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("sum requires an array of numbers");
  }
  for (const item of elements) {
    if (typeof item !== "number") {
      throw new Error("sum requires an array of numbers");
    }
  }
  const listLength = elements.length;
  let total = 0;
  if (listLength === 0) {
    return 0;
  }
  elements.forEach((item) => {
    total = total + item;
  });
  return Number(total.toFixed(2));
}

module.exports = sum;
