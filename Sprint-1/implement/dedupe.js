function dedupe(arr) {
    let myArr = []
    myArr.push(arr[0])
    for (let i = 0; i < arr.length; i++) {
        if ((myArr.includes(arr[i]) == false)  && (arr.length > 0)) {
            myArr.push(arr[i])
        }
        if (arr.length == 0) return []
    }
    return myArr
}



module.exports = dedupe;
