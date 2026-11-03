function findMax(elements) {
  if (elements.length === 0) {
    return "Infinity";
  }
  const copyElements = Array.from(elements);

  let sortElements = copyElements.sort((a, b) => a - b);
  return sortElements.at(-1);
}

module.exports = findMax;
