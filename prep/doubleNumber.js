// Can you fix this code?
function doubleAllNumbers() {
  let doubledNumbers;

  for (let n of numbers) {
    doubledNumbers.push(n * 2);
  }

  return doubledNumbers;
}

const myNums = [10, 20, 30];
doubleAllNumbers(myNums);
console.log(myNums);
