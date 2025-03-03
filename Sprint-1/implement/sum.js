function sum(elements) {
    const numericalelements = elements.filter(el=> typeof el === "number" && !isNaN(el));
    let total = 0;
    for (let num of numericalelements) {
        total = total + num;
    }
    return total;
}
console.log(sum([-2,-3])); 
module.exports = sum;
