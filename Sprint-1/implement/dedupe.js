function dedupe(arr) {
  let ans = [];
  const s = new Set(arr);
  for (const item of s.values()) {
    ans.push(item);
  }
  return ans;
}

module.exports = dedupe;
