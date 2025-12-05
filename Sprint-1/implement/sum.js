function sum(arr) {
  let total = 0; // variable keeps track of the sum

  for (let element of arr) {
    // iterate through each element in the array
    if (Number.isFinite(element)) {
      // check if the element is a number, without counting NaN or Infinity
      total += element; // add the number to the total sum
    }
  }
  
  return total; // return the final sum
}
module.exports = sum;
