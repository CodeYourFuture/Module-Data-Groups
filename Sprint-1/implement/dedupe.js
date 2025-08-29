function dedupe(list) {
   //First test should return empty string
   if (list.length == 0) {
    return list;
  }

   //Second test should return a copy of the original if there is not dedupe
  const result = [];
  for (let item of list) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  console.log(result);
  return result; 

   //Third test should return a string without duplicate

   
}

module.exports = dedupe;
