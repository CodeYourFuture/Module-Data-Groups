function tally(inputArray) {
  if (Array.isArray(inputArray)) {
    if (inputArray.length === 0) {
      return {};
    }

    let itemCount = 0;
    const tallyObject = {};
    let n = 0;

    while (inputArray.length > 0) {
      const tempArray = [];
      let i = 0;
      let currentArrayItem = inputArray[0];

      while (i < inputArray.length) {
        if (currentArrayItem === inputArray[i]) {
          itemCount++;
          tempArray.push(inputArray.splice(i, 1));
          i--;
        }

        i++;
      }

      if (tempArray.length > 0) {
        tallyObject[tempArray[0]] = tempArray.length;
      }
    }
    console.log(`the new array and the new object ${tallyObject}`);
    return tallyObject;
  } else {
    throw new Error("error invalid input passed, please provide an array");
  }
}

console.log(`new object is ${tally(["a", "a", "b", "c", "c", "d", "a"])}`);

module.exports = tally;
