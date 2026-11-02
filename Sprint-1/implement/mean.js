function calculateMean(list) {
    if (!Array.isArray(list)){
        throw new Error("calculateMean requires an array of numbers");
    }
    if (list.length === 0){
        throw new Error("calculateMean requires a non-empty array");
    }
    for (const item of list) {
        if (typeof item !== "number"){
            throw new Error("calculateMean requires an array of numbers");
        }
    };
    let sum = 0;
    for (let i=0; i<list.length ; i++) {
        sum += list[i];
    };
    return sum/(list.length);
}

module.exports = calculateMean;

/*
mean = sum / length -1
*/