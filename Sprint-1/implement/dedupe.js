function dedupe(arr) {
return arr.filter((item ,index ) => arr.indexOf(item)=== index);



}

module.exports = dedupe;