function dedupe(List) {

//if the array is empty return array
if (List.length === 0)
{
    return List;
}
else
{
setArray = new Set(List);
let List2 = [...setArray];
return List2;
}

}

test1 = dedupe([1,2,3,3,4,4,5]);
console.log(test1);

test2 = dedupe([]);
console.log(test2);

test3 = [1,2,3];
console.log(test3);

module.exports = dedupe;