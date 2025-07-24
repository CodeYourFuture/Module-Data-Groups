function tally(array) {
    // ensures that the input is an array.
    if (!Array.isArray(array)){
        // throw an error if input is not an array
        throw new Error("expected input to be an array");
    }

    // make an empty object to store items counted
    const itemCount = {};
    
    return itemCount;
}

module.exports = tally;
