function tally(arr) {                            // Input should be an array 
    if (!Array.isArray(arr)) {                   // Check if it's an array
        throw new Error("Invalid input");        // Throw an error if not
    }
    const counts = {};                           // Empty object to store item as a key and its frequency as the value 

    for (const item of arr) {                    // Loop through items in array
        if (counts.hasOwnProperty(item)) {       // Using 'hasOwnProperty' to check if item already counted
            counts[item] += 1;                   // If so, increment count by 1
        } else {
            counts[item] = 1;                    // If not, create new key-value pair with the item starting at value of 1
        }
    }
    return counts;                               // Return object containing the tally of each unique item
}

module.exports = tally;

// console.log(tally(['x', 'y', 'z', 'x', 'x', 'x', 'y', 'y', 'z'])); 
// console.log(tally(['yes', 'no', 'maybe', 'yes', 'maybe', 'yes', 'no', 'yes']));