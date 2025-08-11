function sum(elements) {
  // start with total of 0
  let total = 0;

  //loop through each element of the array
  for (let i = 0; i < elements.length; i++) {
    const item = elements[i];

    // check if the item is a number and is finite not Nan or Infinity
    if (typeof item === "number" && Number.isFinite(item)) {
      total += item; // add it to the total
    }
    //if its not a number (string , null etc) ignore it
  }
  // return the final total sum
  return total;
}

module.exports = sum;
