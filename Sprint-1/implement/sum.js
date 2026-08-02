function sum(elements) {
    let counter = 0;
    const filteredList = elements.filter((value) => typeof value === "number" && !isNaN(value) && isFinite(value));
    for (let i = 0; i < filteredList.length; i++) {
        counter += filteredList[i];
    }
    return counter; 
}

module.exports = sum;

console.log(sum([NaN, 1]));
console.log(sum([Infinity, -Infinity]));
