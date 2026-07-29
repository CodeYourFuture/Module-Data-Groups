function sum(elements) {
      const onlyNumbers = elements.filter(elem=>typeof elem==="number"&&!Number.isNaN(elem));
    const addNum = onlyNumbers.reduce((item,n)=>item +n,0);
    return Number(addNum.toFixed(10));
}


module.exports = sum;
