function createLookup(arr) {
   const newArray= arr.reduce((obj,[key,value])=>{
      obj[key] = value
      return obj
      },{})
   return newArray
}

module.exports = createLookup;
