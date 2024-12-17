function tally(inputArray) {
    //initialise an empty object
    let talliedResults = {};
    //check if input is an array
    if (Array.isArray(inputArray)) {
        //for an empty array
        if (inputArray.length === 0) {
            return talliedResults;
        }

        for (const property of inputArray) {
            //if this propert is already in the object increment it
            if (talliedResults[property]) {
                talliedResults[property] += 1;
            }
            else {
                //if not initialize it as one
                talliedResults[property] = 1;
            }
        }

        return talliedResults;
    }
    else {
        throw new Error("The input you provided is not an array");
    }
}

// console.log(tally([1, 2, 3, 1, 4, 1, 5, 2, 3, 4]));
module.exports = tally;
