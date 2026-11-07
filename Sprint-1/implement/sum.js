function sum(elements) {
  let total = 0;
  for (const element of elements) {
    total += element;
  }
  return total;
}
//console.log(sum([1,2,3]))

module.exports = sum;
