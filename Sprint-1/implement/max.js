function findMax(elements) {
    const onlyNumbers = elements.filter(element => typeof element === "number"); 
    const maxNumber = Math.max(...onlyNumbers); 
    return maxNumber;
}

module.exports = findMax;

// console.log(findMax ([30, 50, 10, 40]));
// console.log(findMax (['hey', 10, 'hi', 60, 10]));
// console.log(findMax (['hey','hi']));