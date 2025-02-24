function sum(elements) {
    const numericValues = elements.filter(item=> typeof item ==="number")
    const total = numericValues.reduce((acc,num)=>acc, num, 0);
    return total
}
module.exports = sum;
