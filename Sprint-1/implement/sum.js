function sum(elements) {
  if (elements.length < 1) {
    return 0;
  }
  const numArray = elements.filter((element) => typeof element === `number`);
  if (numArray.length < 1) {
    return `Error`;
  }
  let sum = 0;
  numArray.forEach((element) => {
    sum += element;
  });
  return parseFloat(sum.toFixed(1));
}

console.log(sum([`dog`, `House`, `Ivan`]));

module.exports = sum;
