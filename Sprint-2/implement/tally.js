function tally(array) {
    let object = {};
    if (Array.isArray(array)) {
        for (const i of array) {
            if (object.hasOwnProperty(i)) {
                object[i] = object[i] + 1;
            }
            else object[i] = 1;
        }
    return object;}
    else throw new Error("Invalid input");
}

module.exports = tally;
