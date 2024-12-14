function sum(elements) {
  const numericValues = elements.filter(
    (element) => typeof element === "number" && !isNaN(element)
  );
  let sum1 = 0;
  if (numericValues.length == 0) {
    //if all the elemnts in the array are non-numerical it will add up the ASCII value of all characters

    return 0;
  }

  for (let element of elements) {
    if (typeof element === "number") {
      sum1 += element;
    }
  }
  return sum1;
}

//console.log(sum(["hgy","bhk"]));
module.exports = sum;
