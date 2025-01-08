// Can you fix this code?
function doubleAllNumbers(numbers) {
  let doubledNumbers = [];

  for (let n of numbers) {
    doubledNumbers.push(n * 2);
  }
  //numbers = doubledNumbers;
  return doubledNumbers;
}

const myNums = [10, 20, 30];
console.log(doubleAllNumbers(myNums));// [20, 40, 60]
console.log(myNums); // [10, 20, 30]