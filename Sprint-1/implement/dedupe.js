function dedupe(arr) {
    const result = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!result.includes(item)) 
      result.push(item);
   
  }

  return result;
}
module.experts=dedupe
