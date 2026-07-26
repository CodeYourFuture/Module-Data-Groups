function sum(elements) {
    let innit = 0;
    const filteredList = elements.filter((value) => typeof value === "number");
    for (let i = 0; i < filteredList.length; i++) {
        innit += filteredList[i];
    }
return innit; 
}

module.exports = sum;
