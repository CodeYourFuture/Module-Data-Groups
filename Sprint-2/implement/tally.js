let test = ['a', 'a', 'b', 'c'];

function tally(arg) {
    let frequency = 0;
    let object = {};
    if (arg.length === 0){
        return object;
    }
    for(let i = 0; i < arg.length; i++){
        if(object[arg[i]]){
            frequency++;
            object[arg[1]]=frequency;
        }
        else{
            frequency = 1;
            object[arg[i]]=frequency;
        }
    }
    return object;
}
module.exports = tally;
