function sum(elements) {
    let nums = elements.filter((element)=> typeof  element=== "number")
    if(nums.length === 0){
        return 0
    }
   return nums.reduce((cur, acc)=> cur + acc)
  
}
console.log(sum([4.5, 3.2, 4/3, 2/5]))
module.exports = sum;
