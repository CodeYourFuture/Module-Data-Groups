//I have to check if the parameter is repeated or not ===how?
// I can use for loop and if condition

function dedupe(arr) {
    const notRepeatedChar = [];
        arr.forEach((element)=>{
            //  console.log(element)
            if(!notRepeatedChar.includes(element)){
                
                notRepeatedChar.push(element);
                // console.log(notRepeatedChar)
            }
        })
        
        return notRepeatedChar
}

 module.exports = dedupe;