function resultingFrequency(freqChange){ //defining resulting frequency function with freq change input(array)
    let starterNum = 0 ;
    let resArr = [];
    for(let x of freqChange){
        starterNum += x;
        resArr.push(starterNum);

    }
    return resArr;

}
console.log(resultingFrequency([+1, -2, +3, +1]));