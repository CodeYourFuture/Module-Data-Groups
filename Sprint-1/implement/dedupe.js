function dedupe(elements) {
  if (elements.length === 0) {
    return elements;
  }

  const result = [];

  for (const element of elements) {
    if (!result.includes(element)) {
      result.push(element);
    }
  }

  return result;
}

module.exports = dedupe;
console.log(dedupe(["a", "a", "b"]));
