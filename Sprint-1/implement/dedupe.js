function dedupe(input) {
  if (!Array.isArray(input)) return null;

  const result = [];

  for (const item of input) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

module.exports = dedupe;
