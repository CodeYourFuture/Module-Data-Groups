function sum(list) {
  if (!Array.isArray(list)) return 0;
  let total = 0;
  for (const item of list) {
    if (typeof item === 'number' && !isNaN(item)) {
      total += item;
    }
  }
  return total;
}

module.exports = sum;
