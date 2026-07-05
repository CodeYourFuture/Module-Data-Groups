function sumValue(list){
  
    let total = 0;
  

    for(const num of list){
    total += num;
}
  
  return total;
}

console.log(sumValue([1,2,3,4,5,6,7,8]));

