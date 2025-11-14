
  const result = [];
  const seen = new Set();

  for (let item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }

  return result;
function dedupe(arr) {
  const result = [];
  const seen = new Set();

  for (let item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }

  return result;
}

module.exports = dedupe;

