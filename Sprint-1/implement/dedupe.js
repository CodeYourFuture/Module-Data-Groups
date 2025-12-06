function dedupe(elements) {
  return elements.reduce(
    (unique, ele) => (unique.includes(ele) ? unique : [...unique, ele]),
    []
  );
}

module.exports = dedupe;
