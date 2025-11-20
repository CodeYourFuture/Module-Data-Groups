function calculateMean(list) {
  let total = 0;

  for (const item of list) {
    total += item;
  }
  console.log("the total of the array is", total);
  console.log("the element has",list.length, "elements");
  return (total/list.length);
  
}

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0]; // Because the splice method has been used on the variable list, 
  // the array stored in memory will change, and any variable that points to it will show the updated array.

  return median;
}

const salaries = [10, 20, 30, 40, 60, 80, 80]; 
const median = calculateMedian(salaries);

console.log(salaries, "<--- salaries input before we call calculateMean");
const mean = calculateMean(salaries);

console.log(`The median of the salaries is ${median}`);
console.log(`The mean of the salaries is ${mean}`);
console.log(salaries);

// Notes to understand Array as a reference type
// 1. Arrays are reference types

// This means that when you create an array like this:
// const salaries = [10, 20, 30, 40, 60, 80, 80];
// JavaScript doesn’t store the array itself directly in the variable salaries.

// Instead, the array is stored somewhere in memory, and salaries holds a reference (or pointer) to that memory location.
// 2. What “reference” means

// Think of it like this: the array is a house, and salaries is the address of that house.

// If you write:
// const other = salaries;
// now other has the same address. Both salaries and other point to the same array in memory.

// 3. Implication: modifying the array

// Because both variables point to the same array, changing it through one variable affects the other:
// other[0] = 100;
// console.log(salaries[0]); // 100
// This happens because there is only one array in memory, and both variables reference it.

