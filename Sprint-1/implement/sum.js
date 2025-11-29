function sum(elements) {
  //function to check the number of decimal places
  function numberOfFloat(number) {
    if (Number.isInteger(number)) {
      return 0;
    } else {
      return number.toString().split(".")[1].length;
    }
  }

  function largestFloat(array) {
    let largestNum = 0;
    let floatValue = 0;
    for (number of array) {
      floatValue = numberOfFloat(number);

      if (floatValue > largestNum) {
        largestNum = floatValue;
      }
    }

    return largestNum;
  }

  const initialValue = 0;

  const numberArray = elements.filter((element) => typeof element === "number");

  const checkIfFloat = largestFloat(numberArray);

  if (elements.length === 0) {
    return 0;
  }

  if (numberArray.length > 0) {
    const totalSum = numberArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );

    if (checkIfFloat === 0) {
      return totalSum;
    } else {
      return Number(totalSum.toFixed(checkIfFloat));
    }
  } else {
    return elements.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }
}

module.exports = sum;
