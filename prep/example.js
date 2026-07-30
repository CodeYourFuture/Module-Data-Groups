function doubleAllNumbers(numbers) {
  let doubleNumbers = []
  
  for (let n of numbers) {
    doubleNumbers.push(n * 2);
  }
 
  return doubleNumbers;
}

const myNums = [10, 20, 30];
console.log(doubleAllNumbers(myNums));
console.log(myNums);
