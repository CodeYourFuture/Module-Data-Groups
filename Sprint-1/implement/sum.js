function sum(elements) {
    let numericalValues = elements.filter(item => typeof item === "number");
    let sumOfValues = numericalValues.reduce((a,b) => a+b, 0);
    return numericalValues.length > 0 ? sumOfValues : 0;
}
//const ITEMS = ["a","b"];
//console.log(sum(ITEMS));
module.exports = sum;
