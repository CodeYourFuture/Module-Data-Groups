function dedupe(arr) {
  const result = [];
  for (const item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

console.log(dedupe(["a", "a", "a", "b", "b", "c"]));

module.exports = dedupe;