function findMax(elements) {
  const copyElements = Array.from(elements);
  let sortElements = copyElements.sort((a, b) => a - b);
  return sortElements.at(-1);
}

module.exports = findMax;
