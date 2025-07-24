function tally(array) {
    // ensures that the input is an array.
    if (!Array.isArray(array)){
        // throw an error if input is not an array
        throw new Error("expected input to be an array");
    }
}

module.exports = tally;
