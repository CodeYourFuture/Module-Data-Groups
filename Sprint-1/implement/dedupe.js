function dedupe(input) {
const newArray = []
    if(input.length === 0){
        return []
    }
    for(const i in input)
        for(const j in input)
    if (i !== j && !newArray.includes(input[i]))
        newArray.push(input[i])
    return newArray;
}
module.exports = dedupe;