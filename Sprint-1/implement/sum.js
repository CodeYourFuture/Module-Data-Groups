function sum(elements) {
  // Since our input array might be a mix of numbers and non-value numbers, i have benefited from the filter function to
  // start the analogy of the sum function. so this way we only have number values as an output.
  const filteredValues = elements.filter(element => typeof element === "number");
  // Down below is just there to show the results of the filtered values.
  console.log(filteredValues)

  if (filteredValues.length === 0){
    return 0;
  }
// following line, adds up all the numbers in the array, one by one.
// The first number (x), then adding the next one (y),
// and repeating until you've got the total sum of all the numbers.
  return filteredValues.reduce((x,y) => x+y);
}
console.log(sum([1, 2, 5, "sum", "function"]))
module.exports = sum;
