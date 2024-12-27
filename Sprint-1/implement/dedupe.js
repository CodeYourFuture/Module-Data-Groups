function dedupe(array) {
    // Create a new array to hold unique values
    const uniqueArray = [];
    
    // Iterate through each element in the input array
    for (const element of array) {
        // Check if the element is not already in the uniqueArray
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element); // Add it to the uniqueArray
        }
    }
    
    return uniqueArray; // Return the array of unique values
}

module.exports = dedupe;