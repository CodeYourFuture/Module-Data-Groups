function dedupe(duplicate) {
    //it checks that the parameter is an array
if (!Array.isArray(duplicate)) return "not an array";
//if the array is empty it returns an empty array
if(duplicate.length===0)return [];
//declares a variable with the same  value of duplicate but with only unique elements
const uniqueDuplicate=[...new Set(duplicate)];
//it checks if the array has any duplicates and if it doesnt it returns a copy of itself
if(uniqueDuplicate.length===duplicate.length)return [...duplicate];

}
console.log(dedupe([]))




module.exports = dedupe;
