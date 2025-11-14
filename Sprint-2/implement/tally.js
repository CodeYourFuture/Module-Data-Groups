function tally(arr) {
    let obj = {};
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }

    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]])
            obj[arr[i]] = 1;
        else if (obj[arr[i]])
            obj[arr[i]]++;
    }
    return obj;
}

module.exports = tally; 