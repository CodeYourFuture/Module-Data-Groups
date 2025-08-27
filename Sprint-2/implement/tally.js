function tally(arr) {
  const frequencyOfItems = {};

  if (!Array.isArray(arr)) {
    throw new Error("param is not valid");
  }

  if (Array.isArray(arr) && arr.length === 0) {
    return frequencyOfItems;
  }

  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    // check if key exist in frequencyOfItems
    if (frequencyOfItems.hasOwnProperty(arr[i])) {
      frequencyOfItems[arr[i]] += count; // update the count
    } else {
      frequencyOfItems[arr[i]] = count; // first time for each item in the array
    }
  }
  return frequencyOfItems;
}

//console.log(tally('hello'))
module.exports = tally;
