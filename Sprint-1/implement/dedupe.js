function dedupe(elements) {
  const seen = [];

  elements.forEach((item) => {
    if (!seen.includes(item)) {
      seen.push(item);
    }
  });

  return seen;
}

module.exports = dedupe;