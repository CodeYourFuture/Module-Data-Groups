function findMax(elements) {
    const filtered = elements.filter(elements => typeof elements === "number" && !isNaN(elements))
    const max = Math.max(...filtered);
    return max;
}



console.log(findMax(['apple', 'banana', null, undefined]));
module.exports = findMax;
