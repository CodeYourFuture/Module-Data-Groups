const LIST = [7,3,50];
function calculateMean(arg){
    total = 0;
    for (let item of arg){
        total += item;
    }
    let meanCalc = total/arg.length
    return meanCalc;
}
//console.log(calculateMean(LIST));

