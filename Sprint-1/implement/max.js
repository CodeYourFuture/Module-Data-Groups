function findMax(elements) {
    let max = -(Infinity);
    if(elements.length == 0){
        return Infinity
    }
    for(let i =0; i < elements.length ; i++){
        
        if(typeof elements[i] == "number" && elements[i] > max){
            max = elements[i];
        }
    }
    if(max == -(Infinity)){
        return "there is no number in that array!!";
    }
    else{
        return max;
    }
    
}

module.exports = findMax;

