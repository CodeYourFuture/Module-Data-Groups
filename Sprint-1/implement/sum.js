function sum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    // Check if the value is a number and not NaN
    if (typeof value === "number" && !isNaN(value)) {
      total = total + value;
    }
  }

  return total;
}



module.exports = sum;
