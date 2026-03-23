function sum(arr) {
    
    return arr.filter(item=> typeof item === 'number')
    .reduce((acc, num) => acc + num , 0);
}


module.exports = sum;
