function findMax(list) {
    const numericList = list.filter(
    item => typeof item === "number" && !Number.isNaN(item))

    if(numericList.length === 0){
        return null
  }
    else
        return   Math.max(...numericList)
}

module.exports = findMax;
/*const numericList = list.filter(
    item => typeof item === "number" && !Number.isNaN(item))*/