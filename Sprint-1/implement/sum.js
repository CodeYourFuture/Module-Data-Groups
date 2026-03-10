function sum(elements) {
    if (elements.length === 0)
    {
        return 0;
    }
      let total = 0 ;
    for (const item of elements)
{
    if (typeof item === 'number')
    {
     total =  total + item;
    }
    

}
  return total;
}

module.exports = sum;
