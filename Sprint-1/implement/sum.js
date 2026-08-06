function sum(arr) {
  const list = Array.isArray(arr) ? arr : [arr];
  return list
    .filter(item => typeof item === 'number' && !isNaN(item))
    .reduce((total, num) => total + num, 0);
}

module.exports = sum;
