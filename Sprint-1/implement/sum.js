function sum(elements) {
    if (elements.length === 0) return 0;
    let total = 0
    let num = false;

    for (let i = 0; i < elements.length; i++) {
        const item = elements[i];
        if (typeof item === "number" && !isNaN(item)) { //this excludes non numbers before totalling
            total += item;
            num = true;
        }
    }
    return num? total: null; //if num true i.e actual numbers exist, return total otherwise return null
}

module.exports = sum;
