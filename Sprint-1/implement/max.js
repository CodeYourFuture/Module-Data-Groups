function findMax(elements) {
  max_el = -"Infinity";
  if (!elements) {
    return max_el;
  }
  for (const el of elements) {
    if (typeof el === "number" && el !== NaN) {
      max_el = Math.max(max_el, el);
    }
  }
  return "Input has only non-number values";
}
module.exports = findMax;
