function sum(elements) {
    const sum = elements.filter(element => typeof element === "number" && !isNaN(element));

if (elements.length === 0){
    return 0;
}
else {
    return sum.reduce((acc,curr) => acc + 
curr, 0);  
}
}

module.exports = sum;
