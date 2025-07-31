function sum(elements) {
    const onlyNumbers = elements.filter(item => typeof item === "number" && !isNaN(item));
    const onlyStrings = elements.filter(item => typeof item === "string");

    let sum = 0;

    if (onlyStrings.length === 0){
        for (let item of onlyNumbers){
            sum += item;
        }
        return sum
    }
    else if (onlyNumbers.length !== 0 && onlyStrings.length !== 0){
        for (let item of onlyNumbers){
            sum += item;
        }
        return sum
    }
    else if (onlyNumbers.length === 0 && onlyStrings.length !== 0){
        sum = onlyStrings.join(" ");
        return sum
    };
}

module.exports = sum;
