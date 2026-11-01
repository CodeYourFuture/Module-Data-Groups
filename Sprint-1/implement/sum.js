function sum(list) {
  if (!Array.isArray(list)) {
    throw new Error("sum requires an array of numbers");
  }
  if (!list.every(Number.isFinite)) {
    throw new Error("sum requires an array of numbers");
  }
  let total = 0;
  for (const item of list) {
    total += item;
  }
  return total;
}

module.exports = sum;
