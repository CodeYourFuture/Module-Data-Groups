function sum(elements) {
        
        let numbersOnly  = elements.filter(value => typeof value === 'number')
        let sumOfNumbers = numbersOnly.reduce((acc,curr)=>acc+curr,0);
         return sumOfNumbers;
    
    }



module.exports = sum;
