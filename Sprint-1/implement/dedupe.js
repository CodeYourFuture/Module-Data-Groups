function dedupe(list) {

//if the array is empty return array
if (list.length === 0)
{
    return list;
}
else
{
setArray = new Set(list);
let list2 = [...setArray];
return list2;
}

}

test1 = dedupe([1,2,3,3,4,4,5]);
console.log(test1);

test2 = dedupe([]);
console.log(test2);

test3 = [1,2,3];
console.log(test3);

module.exports = dedupe;