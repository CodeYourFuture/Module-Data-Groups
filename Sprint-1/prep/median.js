function calculateMedian(list) {
    if (list.length % 2 === 0) {
        const leftMiddleIndex = Math.floor(list.length / 2) - 1;
        const rightMiddleIndex = Math.floor(list.length / 2);
        const median = (list[leftMiddleIndex] + list[rightMiddleIndex]) / 2;
        return median;
    } else {
        const middleIndex = Math.floor(list.length / 2);
        const median = list[middleIndex];
        return median;
    }
}

function calculateMean(list) {
    let total = 0;
    for (const item of list){
        total += item      
}
let mean = total/list.length;
return mean;
}
// const salaries = [10, 20, 30, 40, 60, 80, 80];
// const median = calculateMedian(salaries);
// const mean = calculateMean(salaries);

// console.log(`The median salary is ${median}`);
// console.log(`The mean salary is ${mean}`);

const salaries = [10, 20, 30, 40, 60, 80]; //,80];
const median = calculateMedian(salaries);

console.log(salaries, "<--- salaries input before we call calculateMean");
const mean = calculateMean(salaries);

console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`);