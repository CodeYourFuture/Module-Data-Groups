// Can you fix this code?
function doubleAllNumbers(myNums) {
  let doubledNumbers= [];

  for (let n of myNums) {
    doubledNumbers.push(n * 2);
  }

  return doubledNumbers;
}

const myNums = [10, 20, 30];
doubleAllNumbers(myNums);
console.log(doubleAllNumbers(myNums));