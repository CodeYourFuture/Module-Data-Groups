// assembling(collect) the parts
// identify a bug when a function gives an unexpected output.

const salaries = [10, 20, 30, 40, 60, 80, 80]
const median = calculateMedian(salaries);

console.log(salaries, "<---salaries input before we call calculateMedian");// the text inside a log is just a text label
const mean = calculateMean(salaries);

console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`);