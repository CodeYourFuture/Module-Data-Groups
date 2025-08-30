function contains(obj,check) {
    const out = {}
    // console.log(obj)
    if (Object.keys(obj).length ==0) {
        console.log("Empty");
        return false;
    }
    for (let i in obj){
        if (obj[check]) {
            console.log("Yes");
            return true;
        } else {
            console.log("NO");
            return false;
        }
    }
}
console.log(contains({} , []));



module.exports = contains;
