function tally(arr) {
    let obj = Object.create(null);
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }

    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]])
            obj[arr[i]] = 1;
        else
            obj[arr[i]]++;
    }
    return obj;
}

module.exports = tally; 