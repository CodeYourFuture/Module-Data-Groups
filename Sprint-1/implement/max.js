function findMax(list) {
  const numbers = list.filter((n) => Number.isFinite(n));
  if (numbers.length == 0) {
    return "-Infinity";
  } else {
    return Math.max(...numbers);
  }
}

module.exports = findMax;
