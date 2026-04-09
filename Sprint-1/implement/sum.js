function sum(elements) {
 if (elements.length === 0) return 0;
let filteredArray = elements.filter(items => typeof items === "number" && !isNaN(items));
if (filteredArray.length === 0) return null;
let sumTotal = 0;
for(let i = 0; i < filteredArray.length; i++){
    sumTotal += filteredArray[i];
}
return sumTotal;
}

module.exports = sum;


