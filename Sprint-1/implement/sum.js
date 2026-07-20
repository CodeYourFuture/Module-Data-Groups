function sum(elements) {
  let sum = 0;

  let filteringArr = elements.filter((item) => {
    return typeof item === "number";
  });

  for (let i = 0; i < filteringArr.length; i++) {
    sum += filteringArr[i];
  }
  return sum;
}
module.exports = sum;
