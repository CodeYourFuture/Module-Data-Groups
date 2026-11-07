function findMax(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("findMax requires an array of numbers");
  }
  if (elements.length === 0) {
    return "-Infinity";
  }

  const copyElements = Array.from(elements);
  for (const item of copyElements) {
    if (typeof item !== "number") {
      throw new Error("findMax requires an array of numbers");
    }
  }
  let sortElements = copyElements.sort((a, b) => a - b);
  return sortElements.at(-1);
}

module.exports = findMax;
