function sum(elements) {
    let total = 0;
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (typeof element === "number" && !isNaN(element)) {
            total += element;
        }
    }
    return total;
}

module.exports = sum;
