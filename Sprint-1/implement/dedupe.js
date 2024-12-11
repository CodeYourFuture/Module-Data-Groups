function dedupe(list) {

    let newList = [];
    if (list.length === 0) {
        //return the empty list if an empty list is given as an input
        return list;

    }

    else {
        //else take the list given and iterate through the list to find out out if any of the elements are not already in the newList

        for (let i = 0; i < list.length; i++) {
            if (!newList.includes(list[i])) {
                newList.push(list[i])
            }
        }

        return newList;
    }
}
