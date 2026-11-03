function calculateMean(list) {
    let sum = 0;

    for (item of list){
        sum += item;
    }

    return sum / list.length;
}

module.exports = calculateMean;
