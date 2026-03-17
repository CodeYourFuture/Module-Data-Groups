function findMax(elements) {
    if(elements.length === 0)
    {
        return -Infinity;
    }
    let max = -Infinity ;
    for (const item of elements)
{
    if (typeof item === 'number')
    {
    max =  Math.max(max , item);
    }
    

}
  return max;
}

module.exports = findMax;
