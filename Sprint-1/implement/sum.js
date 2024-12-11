function sum(elements) {

    let total = 0;

    let filteredElements = elements.filter(item => typeof item === "number" && !isNaN(item));

    for(let i = 0; i < filteredElements.length; i++){
        total += filteredElements[i];
    }
    return total;
}

module.exports = sum;

console.log(sum(['hey', 10, 'hi', 60, 10]));