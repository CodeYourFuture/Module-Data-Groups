function calculateMean(list) {

    if (list.length === 0){
        throw new Error("calculateMean requires a non-empty array");
    };

    let sum = 0;

    for (item of list){
        sum += item;
    };

    return sum / list.length;
}

module.exports = calculateMean;
