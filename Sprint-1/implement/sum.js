function sum(elements) {
    // if the array is empty 
    if (elements.length===0)
    {
            return 0;
    }

    // if all array value are not non-numeric value
    else if (elements.every(items => isNaN(items) === false)){
        let total = 0;
        for (let i=0;i < elements.length;i++)
        {
            total += elements[i];
        }
        return total;

    }

    // if the all values in array are all non-numeric number 
    else if (elements.every(items => isNaN(items)) === true)
    {
        return "There is no numbers in this array"
    }

    // if the array has mix with non-numeric & numeric value 
    else 
    {
       // filter the string from the array 
        Filter_arr = elements.filter(s => typeof s === 'number');
        
        return sum(Filter_arr);

    }
}

module.exports = sum;


// for empty array 
EmptArr = sum([]);
console.log("The result is :",EmptArr);

// for the array with one numeric value

OneArr =  sum([7]);
console.log("The result for array with one value",OneArr);

// for the array with all positive values
PosArr = sum([1,2,3]);
console.log("The result for array with all positive values",PosArr);

// for the array with all negative values

NegArr = sum([-1,-2,-3]);
console.log("The result for array with all negative values",NegArr);

// for the array with mixed positive & negative values

MixArr = sum ([1,-2,3,-3,8]);
console.log("The result for array with both +&- values",MixArr);

// for the array with mix num & sting 

MixedArr = sum ([1,2,"a","b","c"]);
console.log("The result for array mixed with number& string",MixedArr);

// for the array with all string value 

StrArr = sum(["a","b"]);
console.log("The result for array with all string value",StrArr);

testNan =  sum([NaN,1]);
console.log("The result for Nan,1",testNan);