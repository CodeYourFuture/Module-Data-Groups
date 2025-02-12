function sum(elements) {
  let total = 0;
  for (let i = 0; i < elements.length; i++) {
    total += elements[i];
  }
  return total;
}
console.log(sum([10, 10, 10]));

module.exports = sum;
