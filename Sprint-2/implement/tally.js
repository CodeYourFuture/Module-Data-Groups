function tally(arr) {
  let countOfItemsObj = {};
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input");
  } else if (arr.length < 1) {
    return countOfItemsObj;
  } else {
    for (let element = 0; element < arr.length; element++) {
      const exist = Object.hasOwn(countOfItemsObj, arr[element]);
      if (!exist) {
        countOfItemsObj[arr[element]] = 1;
      } else {
        countOfItemsObj[arr[element]] = countOfItemsObj[arr[element]] + 1;
      }
    }
  }
  return countOfItemsObj;
}

module.exports = tally;
