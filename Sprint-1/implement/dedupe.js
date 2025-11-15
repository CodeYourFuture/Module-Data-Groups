function dedupe(myArray) {
  //check array for duplicates
  //for each item compare to all other items and return true if duplicate found
  //if none return copy of array
  function checkForDupe(item) {
    let counter = 0;
    for (let value of myArray) {
      if (item === value) {
        counter++;
      }
    }
    if (counter > 1) {
      return false;
    } else {
      return true;
    }
  }

  const noDupeArray = myArray.filter(checkForDupe);

  if (myArray.length === 0) {
    //return empty array for empty array
    return [];
  } else if (myArray.length === noDupeArray.length) {
    //return copy of array if no duplicates
    return noDupeArray;
  }

  //to remove duplicates first we take a given item in an array
  //and compare it to all the other items in the array.
  //we will need a counter to keep track of the number of times an item matches
  //we only want to keep items with a count of 1
  //so for any matches with a count of 2 or more we remove the item at the matching index

  myArray.forEach((item) => {
    let matchCount = 0;

    for (let i = 0; i < myArray.length; i++) {
      if (item === myArray[i]) {
        matchCount++;

        if (matchCount > 1) {
          myArray.splice(i, 1);
        }
      }
    }
  });

  console.log(`my final array for duplicates is ${myArray}`);

  return myArray;
}

dedupe(["ben", "two", "two", 2, "shine", "count", 9, "man"]);

module.exports = dedupe;
