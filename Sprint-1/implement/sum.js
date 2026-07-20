function sum(elements) {
  elements = elements.filter(element => typeof element === 'number');
  let total = 0;

  for (let element of elements) {
    total += element;
    // += means to add to the current value and assign as result
    // elements are individual items inside a collection (not just string)
  }

  return total;
}

module.exports = sum;
