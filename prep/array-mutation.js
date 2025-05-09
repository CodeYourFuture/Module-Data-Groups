//reference
const list = [10, 20, 30];
const copy = list;
copy.push(60, 70);

console.log(list);
console.log(copy);
console.log(list === copy) //

//here i declare 2 functions first. calculateMean() outputs mean of an array. calculateMedian3() outputs median of the same array.
/*After i call both functions, the second function does not give the correct output. why?
because the array has been mutated in the first function. so the second function does its calculations on the mutated array. 
how to fix it? predict. then look at the line 38*/ 
function calculateMean(arg){
    total = 0;
    for (let item of arg){
        total += item;
    }
    let meanCalc = total/arg.length
    return meanCalc;
}
function calculateMedian3 (medianArg_v3){
    const SORTED_ARGUMENT = medianArg_v3.sort((a,b) => a-b);
    const MIDDLE_INDEX = SORTED_ARGUMENT.length/2;
    if (SORTED_ARGUMENT.length%2 == 1){
        let middleIndexOfOdd = Math.trunc(MIDDLE_INDEX);
        let medianOfList = SORTED_ARGUMENT.splice(middleIndexOfOdd,1)[0];
        return medianOfList;
    }
    else{
        let y = MIDDLE_INDEX - 1;
        let x = (SORTED_ARGUMENT[MIDDLE_INDEX]+SORTED_ARGUMENT[y])/2;
        return x;
    }
}
const salaries = [10, 20, 30, 40, 60, 80, 80];
const median = calculateMedian3(salaries);
const SALARIES_COPY = [10, 20, 30, 40, 60, 80, 80];
const mean = calculateMean(SALARIES_COPY).toFixed(3);

console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`);
console.log(salaries === SALARIES_COPY);

function pluralise(arr) {
	  return arr.push("s");
}
const lettersInAnArray = ["c","a","t"];



console.log(pluralise(lettersInAnArray));
console.log(lettersInAnArray.length);
console.assert(lettersInAnArray.length === 4);
console.assert(lettersInAnArray[3] === "s"); 

function pluralise_V2(str) {
    return str += "s";
}
const string = "dog";
const length = string.length;
pluralise_V2(string);

console.log(pluralise_V2(string));
console.log(length);
console.assert(string.length === 4 );
console.assert(string === "dogs"); 
