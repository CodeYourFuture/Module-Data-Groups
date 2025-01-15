module.exports = dedupe;


/*function dedupe(list) {
//given an empty array, it returns an empty array
        if (list.length === 0 ) {
            return list 
//given an array with no duplicates, it returns a copy of the original array
        } else if (list.length !== 0){
        let occurances = []
          for (let i = 0; i < list.length; i++) {
             for (let j = i + 1; j < list.length; j++) {
                //identifies if theres duplicates
                if (list[i] === list[j]) {
                        //save duplicate in a new array
                        occurances.push(list[j])
                        //check list and occurances and remove duplicate
                        //console.log(occurances);
                        return occurances; //new list without occurances
                } 
              }                                                                                               
          }
        } return [...list]; 
}*/


/*function dedupe(list) {
//given an empty array, it returns an empty array
        if (list.length === 0 ) {
            return list 
//given an array with no duplicates, it returns a copy of the original array
        } else if (list.length !== 0){
        let occurances = []
        //loop to check each item in the list
                list.forEach((item, index) => {
                        list.forEach((innerItem,  innerIndex) => {
                                if(index !== innerIndex && item === innerItem)
                                        occurances.push(item);
                        });

                }); // compare occurances(duplicates) and list return only unique items
                                                                                                   
          } return [... list]

        }*/


function dedupe(list) {
  if (list.length === 0) {
    return [];
  }

  const uniqueList = [];

  list.forEach((item) => {
    if (!uniqueList.includes(item)) {
      uniqueList.push(item);
    }
  });

  return uniqueList;
}
const list = ['a', 'a', 'b', 'b', 'c', 'd','c']
console.log(dedupe(list));