function findMax(elements) {
    if (elements.length < 1) {
        return -Infinity;
    } else {
        const filteredList = elements.filter((value) => typeof value === "number");
        return Math.max( ...filteredList)}
    
}

module.exports = findMax;

//console.log(findMax([30, 50, 10, 40])); // 50
