function sum(arr) {
  let total = 0; // variable keeps track of the sum

  for (let element of arr) {
    // iterate through each element in the array
    if (typeof element === "number") {
      // check if the element is a number
      total += element; // add the number to the total sum
    }
  }
  
  return total; // return the final sum
}
module.exports = sum;
