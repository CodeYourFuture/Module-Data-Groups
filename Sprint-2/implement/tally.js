function tally(list) {
  var counts = {};

  for (var item of list) {
    if (counts[item]){
      counts[item] += 1;
    } else {
      counts[item] = 1;
    }
  }

  return counts;
}

console.log(tally(['a', 'a', 'c', 'a', 'd']))
module.exports = tally;
