function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      total += arr[i];
    }
  }
  return total;
}

let arr = [Infinity, -Infinity];
console.log(sum(arr));

module.exports = sum;
