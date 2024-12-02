function findMax(elements) {
    if(elements.length == 0){
        return -Infinity;
    }else if(elements.length == 1 && typeof(elements[0])== 'number'){
      return elements[0];
    }else if(elements.length>1){
        const numValues = elements.filter((item) => typeof item === "number");
        const maxNum = Math.max(...numValues);
        console.log(maxNum);
        
        return maxNum
    }
}

module.exports = findMax;



