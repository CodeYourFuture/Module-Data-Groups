function tally(arr) {
  let countOfItemsObj = {};
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input");
  } else if (arr.length < 1) {
    return countOfItemsObj;
  } else {
    for (let index = 0; index < arr.length; index++) {
      const exist = Object.hasOwn(countOfItemsObj, arr [index]);
      if (!exist) {
        countOfItemsObj[arr[index]] = 1;
      } else {
        countOfItemsObj[arr[index]] = countOfItemsObj[arr[index]] + 1;
      }
    }
  }
  return countOfItemsObj;
}
module.exports = tally;
