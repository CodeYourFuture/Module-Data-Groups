function findMax(elements) {
  let largestNum = -Infinity

  let filteringArr = elements.filter((item) => {
    return typeof item === "number";
  });
  

  for (let i = 0; i < filteringArr.length; i++) {
    if (filteringArr[i] > largestNum) {
     
      largestNum = filteringArr[i];
    }
  }
  return largestNum;
}

module.exports = findMax;

