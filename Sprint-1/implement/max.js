function findMax(arr) {
  if (!Array.isArray(arr)) return -Infinity;

  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

module.exports = findMax;
