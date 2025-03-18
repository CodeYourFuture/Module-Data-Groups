function sum(elements) {
    let total = 0;
  for (let Index=0; Index < elements.length; Index++){
    if (typeof elements[Index] === "number"){
        total+=elements[Index];
    }
    else {
        total=total + 0;
    }

   }
   return total;
    
}



module.exports =sum;
