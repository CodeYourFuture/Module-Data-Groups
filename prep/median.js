LIST = [2,9,39,5,61,18];
function calculateMedian2(medianArg_V2) {
    // Sort the array
    let sortedArgument = medianArg_V2.sort((a, b) => a - b);
    let midIndex = Math.trunc(sortedArgument.length / 2);
    // Check if the array has an odd or even number of elements
    if (sortedArgument.length % 2 === 1) {
        return sortedArgument[midIndex];
    } else {
        return (sortedArgument[midIndex - 1] + sortedArgument[midIndex]) / 2; //toye [] mittonam calc anjam bedam!
    }
}
console.log(calculateMedian3(LIST));