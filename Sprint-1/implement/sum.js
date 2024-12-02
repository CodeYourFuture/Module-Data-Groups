function sum(elements) {
    if(elements.length == 0){
         return 0
    }else if(elements.length == 1){
        return elements[0]
    }else{
        return elements.filter((item) => typeof item == "number").reduce((total, item)=> total+ item,0) 
    }
}

module.exports = sum;
