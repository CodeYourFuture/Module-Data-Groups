
function dedupe(list) {
if (list.length === 0 ) return list;
let newList = []
for (i = 0 ; i < list.length; i ++){
    if (!newList.includes(list[i])) {
        newList.push(list[i]);
    }
}
return newList;
}
module.exports = {dedupe}