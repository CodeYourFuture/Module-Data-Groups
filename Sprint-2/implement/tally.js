function tally(items) {
 if (!Array.isArray(items)) {
    throw new Error("tally requires an array");
}
const list_of_items= Object.create(null);
// const list_of_items= {};

for (const item of items) {
    if (list_of_items [item]) {
        list_of_items[item]++;
    } else {
        list_of_items[item] = 1;
    }

}
 return list_of_items;
}

module.exports = tally;
