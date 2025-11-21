function sum(elements){

    if (!Array.isArray(elements) || elements.length ===0) return 0;

    const numbers = elements.filter(x => typeof x === "number");
  
    let total =0;

    for (let i =0; i< numbers.length; i++){

      total += numbers[i];

    }
  
    return total;
  }
  
  console.log(sum([10, 20, 30]));
   console.log(sum([1, "a", 2, null, 3]));
   console.log(sum([])); 

module.exports = sum;
