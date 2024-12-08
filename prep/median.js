function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  // const median = list.splice(middleIndex, 1)[0];

  for (const item of list) {
    
  }

  return median;
}

const salaries = [10, 20, 30, 40, 60, 80, 80];
const median = calculateMedian(salaries);

console.log(salaries, "<--- salaries input before we call calculateMean");
const mean = calculateMean(salaries);

console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`);