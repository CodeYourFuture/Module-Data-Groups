function sum(elements) {

    let initialValue = 0;
    const onlyNumbers = elements.filter((element) => typeof element === "number");
    let totalSum = onlyNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    
    return totalSum;
}

module.exports = sum;
