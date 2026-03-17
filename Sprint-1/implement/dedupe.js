function dedupe(list) {
  if (list.length=== 0)
    {
        return [];
    }
     let result = [];
  for (let item of list)
  {
    if(!result.includes(item))
    {
        result.push(item);
    }
    }
    return result;
 
}
module.exports = dedupe;