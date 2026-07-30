function sum(elements) {
  //filter out non-numbers
  elements = elements.filter((element) => typeof element === "number");

  // initialise a sum total
  total = 0;

  // loop through the elements of the array and add each to the total
  for (let i = 0; i < elements.length; i++) {
    total = total + elements[i];
  }

  // finally return the total
  return total;
}

module.exports = sum;
