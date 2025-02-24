function sum(elements) {
    let sums = 0
    for(i = 0; i < elements.length ;i++){
      if(typeof elements[i] === "number"){
      let num = elements[i]
      sums += num
      }
    
    }
    return sums
}
console.log(sum(["mom", "dad", "sister"]))
module.exports = sum;