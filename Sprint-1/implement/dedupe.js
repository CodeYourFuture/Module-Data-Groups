function dedupe(elements) {
  const result = [];
  for (let i = 0; i < elements.length; i++) {
    if (!result.includes(elements[i])) {
      result.push(elements[i]);
    }
  }

  return result;
}

module.exports = dedupe;
