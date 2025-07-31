// function tally(listOfItems) {
//     const itemCount = {}

//     for (const item of listOfItems) {
//         if (itemCount[item]) {
//             itemCount[item] += 1;
//         } else {
//             itemCount[item] = 1;
//         }
//     }
//     return itemCount;
// }

function tally(listOfItems) {
    if (!Array.isArray(listOfItems)) {
        throw new Error("Input must be an array!");
    }

    const itemCount = {}
    
    for (const item of listOfItems) {
        itemCount[item] = (itemCount[item] || 0) + 1;
    }
    return itemCount;
}

module.exports = tally;
