function findMax(num) {
  for (let i = 0; i < num.length; i++) {
    if (num.length === 0) {
      return -Infinity;
    }
    if (num.length === 1) {
      return num[0];
    }
    if (Math.sign(num) === -1 && num.length > 1) {
      return Math.max(...num);
    }
    if (num.isDecimal === true) {
      return Math.max(...num);
    }
    if (typeof num[i] !== "number") {
      num.splice(i, 1);
      i--;
    }
  }
  return Math.max(...num);
}

module.exports = findMax;
