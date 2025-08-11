function dedupe(arr) {
    uniqeArr=[];
    for(const item of arr)
    {
        if(!uniqeArr.includes(item))
        {
            uniqeArr.push(item);
        }
    }
    return uniqeArr;
}

module.exports=dedupe;