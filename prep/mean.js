// function calculateMean(list) {
//   let total = 0;
//   for (const item of list) {
//     total += item;
//   }
// }
// calculateMean([10, 20, 30, 40, 50])
// DEbugger shift ctrl P
//debug: toggle auto attach
//only auto attach when the inspect flag is given
// node --inspect file.js
// This function calculates the average of numbers in an array
function calculateMean(list) {
    // If the list is empty, return 0---- that is another test level
    if (list.length === 0) {
        return 0;
    }
    
    // Add up all the numbers
    let total = 0;
    for (const item of list) {
        total += item;
    }
    
    // Divide by how many numbers there are
    return total / list.length;
}

// This makes the function available to other files
module.exports = calculateMean;