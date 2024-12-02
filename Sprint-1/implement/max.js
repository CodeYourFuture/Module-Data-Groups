function findMax(elements) {
    if(elements.length == 0){
        return -Infinity;
    }else if(elements.length == 1 && typeof(elements[0])== 'number'){
      return elements[0];
    }
}

module.exports = findMax;



