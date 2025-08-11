function tally(arrayOfKeys) {
    if(!Array.isArray(arrayOfKeys)) {
        throw new Error("Input must be an array");
        }
    return arrayOfKeys.reduce((acc,key)=>{
        acc[key]=  (acc[key] || 0) + 1
        return acc;
    },{})

}

module.exports = tally;
