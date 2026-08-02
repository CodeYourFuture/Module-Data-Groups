function dedupe(list) {
    if (list.length === 0){
        return null;
    }else{
        //compare the array elements and check is there is duplicate
        listDedupe = list.filter((item, index) => list.indexOf(item) === index);
        return listDedupe;
    }
}

module.exports = dedupe;
