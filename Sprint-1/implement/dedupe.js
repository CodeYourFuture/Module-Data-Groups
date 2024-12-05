function dedupe(a) {
  if (a === undefined || a.length == 0) {
    return "given an empty array, it returns an empty array";
  }
  let s = new Set(a);

  let a1 = [...s];

  return a1;
}

module.exports = dedupe;
