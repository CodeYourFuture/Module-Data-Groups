function dedupe(list) {
  if (list.length === 0) {
    return [];
  } else {
    
    const resultList = [list[0]];
    for (index = 1; index < list.length; index++) {
    
      const val = list[index];
      if (!resultList.includes(val)) {
        resultList.push(val);
      }
    }
    return resultList;
  }
}

module.exports = dedupe;
