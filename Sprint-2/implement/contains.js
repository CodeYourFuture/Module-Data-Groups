function contains(objInp,inputStr) {
    if(Object.keys(objInp).length === 0){
        return false;
    }
    else if( typeof objInp !== "object" || Array.isArray(objInp) ){
        console.error("This is not Obj: Please give object");
        return false;
    }
    else{
        for (let key in objInp) {
          if (key === inputStr) {
            return true;
          }
        }
    }
    return false; //key not found

}

module.exports = contains;
