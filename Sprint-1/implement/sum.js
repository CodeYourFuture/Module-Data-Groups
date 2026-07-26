function sum(elements) {
    let innit = 0;
    for (let i = 0; i < elements.length; i++) {
        innit += elements[i];
    }
return innit;   
}

module.exports = sum;
