function dedupe(list) {
  const seen = {};
  const result = [];

  for (const item of list) {
    if (seen[item] === undefined) {
      seen[item] = true;
      result.push(item);
    }
  }

  return result;
}

module.exports = dedupe;
