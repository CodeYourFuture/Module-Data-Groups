function tally(frequencyArray) {
    let frequencyObject = {};
    // declare an object to use it later
    if (!(Array.isArray(frequencyArray))) {
        return "Error";
    }
    // check if input isn't array
    for (const item of frequencyArray) {
        if (frequencyObject[item]) {
            frequencyObject[item]++;
            // check if the object contains the item, if yes - increment the value for the item
        } else {
            frequencyObject[item] = 1;
            // check if the object contains the item, if no - add 1 value for the item
        }
    }
    return frequencyObject;
}

module.exports = tally;
