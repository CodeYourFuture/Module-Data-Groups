function dedupe(arr) {
     const removeRepeated = arr.filter((element, index) => {
      
        return arr.indexOf(element) === index
     })
  
   return removeRepeated

}

console.log(dedupe(['a','a','a','b','b','c', 'c','d','d' ]))
console.log(dedupe(['1','2','3','4','5']))
console.log(dedupe(['1','a','b','b','1']))

module.exports = dedupe;

// new Set(); can used for bigger and complex dedupe.
//its more efficient than checking with indexOf