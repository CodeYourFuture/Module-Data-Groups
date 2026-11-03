function sum(elements) {
  if (elements.length === 0) {
    return 0;
  }
  if (!Array.isArray(elements)) {
    throw new Error("sum requires an array of numbers");
  }
  for (const item of elements) {
    if (typeof item !== "number") {
      throw new Error("sum requires an array of numbers");
    }

    const copyElements = Array.from(elements);
    let total = 0;
    for (let i = 0; i < copyElements.length; i++) {
      total += copyElements[i];
    }
    if (Number.isInteger(total)) {
      return total;
    } else {
      return Number(total.toFixed(2));
    }
  }
}

module.exports = sum;
