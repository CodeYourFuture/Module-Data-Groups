function dedupe(list) {
    let seen = [];
    let copyList = [];
    if (list.length === 0){
        return list;
    }
    if(list.length > 0){
        for(let value=0; value < list.length; value++){
            if(seen.includes(list[value])){
                continue;
            }
            else{
                seen.push(list[value]);
            }
            console.log(seen)      
        }
        return seen;   
    }
    
}

// if(seen.has(value)){
//     return false;
// }
// else{
//     seen.add[value];
// }
// return seen;

module.exports = dedupe;
