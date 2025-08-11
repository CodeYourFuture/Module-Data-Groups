function tally(inputArray) {
    //initialise an empty object
    let talliedResults = {};
    //check if input is not an array
    if (!Array.isArray(inputArray)) {
        throw new Error("The input you provided is not an array");
    }
    for (const property of inputArray) {
        //if this propert is already in the object increment it

        talliedResults[property] = (talliedResults[property] || 0) + 1;
    }

    return talliedResults;
}


// console.log(tally([1, 2, 3, 1, 4, 1, 5, 2, 3, 4]));
module.exports = tally;
