// start your function;
function findMax(elements) {
  if (elements.length === 0) return -Infinity;
  let onlyNumArr = elements.filter((el) => typeof el === "number");
  let maxNum = Math.max(...onlyNumArr);
  return maxNum;
}

module.exports = findMax;
