function doubleAllNumbers(numbers){
  let doubleAllNumbers = [];
  for(let n of numbers){
    doubleAllNumbers.push(n * 2)
  }
  return doubleAllNumbers;
}

const myNums = [10,20, 30];
doubleAllNumbers(myNums);
console.log(myNums);

/* Another way to double numbers in an array is by using the for loop

function doubleAllNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] *= 2;
  }
}
 console.log(doubleAllNumbers(myNums))
*/
