function sum(elements) {
        if (elements.length===0){
            return 0;
        }
        return elements.filter(Number.isFinite).reduce((a, b) => a + b, 0);
    }


module.exports = sum;
