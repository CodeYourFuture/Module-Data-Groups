function sum(arr) {// sum.js

      return arr.reduce((total, current) => {
        // Only add current if it's a number (including integers and floats)
        if (typeof current === 'number') {
          return total + current;
        }
        return total;
      }, 0);
    }
    
    module.exports = sum;
