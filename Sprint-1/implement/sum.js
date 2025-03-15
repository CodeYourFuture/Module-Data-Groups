function sum(elements) {
    const sum = (elements) => {
        const numericalValues = elements.filter(element => typeof element === 'number');
        return numericalValues.reduce((total, current) => total + current, 0);
          }
    
    }

module.exports = sum;
