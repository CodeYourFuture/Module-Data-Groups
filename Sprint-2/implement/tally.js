function tally(list) {
    const uniqueItems = {};
    if(list.constructor === String){
        throw new Error ("Invalid Input")
    }
    for (const frequency of list){
    uniqueItems[frequency] = (uniqueItems[frequency] || 0) + 1;
    }

    return uniqueItems;
}


module.exports = tally;
