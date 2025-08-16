function calculateMean(list) {
  let total = 0;

  for (const item of list) {
    total += item;
  }
  const mean = total/list.length
  return mean;
}

//console.log(calculateMean([10,20,30,40,50]))


function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];

  return median;
}


const salaries = [10, 20, 30, 40, 60, 80, 80];

const sal_mean = calculateMean(salaries)
const sal_med = calculateMedian(salaries)

console.log(sal_mean)
console.log(sal_med)
console.log(salaries)