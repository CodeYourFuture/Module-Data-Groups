function tally(listOfItems) {

    if (!Array.isArray(listOfItems)) {
        throw new Error("Input must be an array.");
    }

    const frequency = {};

    for (const item of listOfItems) {
        if (frequency[item]){ // check if item is a key in the obj
            frequency[item] += 1; // if yes increments by 1
        } else {
            frequency[item] = 1; // if no create a new key and sets it to 1
        }
    };

    return frequency;
}

module.exports = tally;
