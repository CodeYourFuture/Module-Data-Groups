function dedupe(arr) {
    const modified = [];

    arr.forEach(el => {
       if (!modified.includes(el)) {
        modified.push(el) ;
       }
})
    return modified;
 }
 module.exports = dedupe;