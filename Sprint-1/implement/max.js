function findMax(elements) {
  if (elements.length === 0) {
    return -Infinity;
  } else if (elements.length === 1) {
    return elements[0];
  }

  let largestNum = 0;
  let largestValue = "";
  let countNum = 0;

  if (typeof elements[0] === "number") {
    largestNum = elements[0];
  } else {
    let largestValue = elements[0];
  }

  for (let i = 1; i < elements.length; i++) {
    if (typeof elements[i] === "number") {
      countNum++;

      if (elements[i] > largestNum) {
        largestNum = elements[i];
      }
    } else {
      if (elements[i] > largestValue) {
        largestValue = elements[i];
      }
    }

    //we create an array of numbers using filter
    //if (typeof largestNum !== 'undefined') {

    //    numberArray = elements.filter((element) => typeof element === 'number');
    //    console.log(numberArray);

    //}
  }

  if (countNum > 0) {
    return largestNum;
  } else {
    return largestValue;
  }
}

findMax(["zero", -4, -80, -100, -120, 0, "tom"]);

module.exports = findMax;
