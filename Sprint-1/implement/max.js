function findMax(arr) {
  return arr
    .filter((item) => typeof item === "number" && Number.isFinite(item));
    if(numbers.length=== 0) return null; 
   return numbers.reduce((acc, num) => (num > acc ? num : acc), -Infinity);
}

module.exports = findMax;
