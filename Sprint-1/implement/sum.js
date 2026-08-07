function sum(elements) {
    let result = 0;
    if(elements.length === 0){
        return 0;
    }
    for(let i = 0; i < elements.length; i++){
        if(typeof(elements[i]) == "number"){
            result = result + elements[i];
        }
    }
    return result;

}
module.exports = sum;
