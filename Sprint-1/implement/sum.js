function sum(elements) {
  let total = 0;
  for (let i = 0; i < elements.length; i++) {
    let value = elements[i];
    if (typeof value === 'number' && !isNaN(value)) { // Check if the value is a number
      total = total + value;
    }
  }
  return total;
}



module.exports = sum;
