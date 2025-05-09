
function dedupe(list) {
    return [...new Set(list)];
  };

module.exports = dedupe;
//const LIST = ['a','a','b',1,1];
//console.log(dedupe(LIST));
