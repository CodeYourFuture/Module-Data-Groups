function sum(list) {
  if (list.length === 0) {
    return 0;
  }

  const numericList = list.filter(item => typeof item === "number" && !Number.isNaN(item));

  if (numericList.length === 0) {
    return null;
  }

  return numericList.reduce((acc, val) => acc + val, 0);
}
module.exports = sum;
