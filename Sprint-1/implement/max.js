function findMax(elements) {
    const numbersOnly = elements.filter((item)=> typeof item === 'number' && !Number.isNaN(item));

    if (numbersOnly.length ===0 ){
        return -Infinity 
    }
    const sorted = [...numbersOnly].sort((a,b) => a-b)
    const max = sorted[sorted.length-1]

    return max


}

module.exports = findMax;
