function sum(elements) {
 const sumOfElement = elements.reduce((acc ,value)=>{
    if(!isNaN(value) && typeof value === 'Number'){
        return value+acc
    }
return acc
 },0)       
  return sumOfElement;      
    
}    



module.exports = sum;
