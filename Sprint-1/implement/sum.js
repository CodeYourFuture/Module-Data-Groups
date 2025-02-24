function sum(elements) {
  let sum = 0;
  let containsNumber = false;
  if (elements.length < 1) {
    return 0;
  }
  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] !== `number`) {
      continue;
    } else {
      sum += elements[i];
      containsNumber = true;
    }
  }
  if (!containsNumber) {
    return `Error`;
  } else {
    return parseFloat(sum.toFixed(1));
  }
}

console.log(sum([`dog`, `House`, `Ivan`]));

module.exports = sum;
