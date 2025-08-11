function contains(arg1,arg2) {
if(Array.isArray(arg1)){  //add to note
    throw new Error("this function only accept object as arg1");
}
for (const keys in arg1){
    if (keys === arg2){
        return true;
    }
}
return false;
}
let test = {"a":1, "b":2};
console.log(contains(test,"a"));





module.exports = contains;
