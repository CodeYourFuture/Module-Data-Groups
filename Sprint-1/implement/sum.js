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
        filter_arr = elements.filter(s => typeof s === 'number');
        
        return sum(Filter_arr);

    }
}

module.exports = sum;


// for empty array 
emptArr = sum([]);
console.log("The result is :",emptArr);

// for the array with one numeric value

oneArr =  sum([7]);
console.log("The result for array with one value",oneArr);

// for the array with all positive values
posArr = sum([1,2,3]);
console.log("The result for array with all positive values",posArr);

// for the array with all negative values

negArr = sum([-1,-2,-3]);
console.log("The result for array with all negative values",negArr);

// for the array with mixed positive & negative values

mixArr = sum ([1,-2,3,-3,8]);
console.log("The result for array with both +&- values",mixArr);

// for the array with mix num & sting 

mixedArr = sum ([1,2,"a","b","c"]);
console.log("The result for array mixed with number& string",mixedArr);

// for the array with all string value 

strArr = sum(["a","b"]);
console.log("The result for array with all string value",strArr);

testNan =  sum([NaN,1]);
console.log("The result for Nan,1",testNan);