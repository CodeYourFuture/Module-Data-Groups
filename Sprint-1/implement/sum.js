function sum(theArray) {

  let onyNumbers = theArray.filter(item => typeof item === 'number');
  

  const theFinalSum = onyNumbers.reduce((runningTotal, currentNumber) => {
    return runningTotal + currentNumber;
  }, 0);

  return theFinalSum;
}

console.log (sum(["hey", 10, "hi", 60, 10]));

module.exports = sum;

//numbersList.filter((item) => typeof item === "number");
/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/
