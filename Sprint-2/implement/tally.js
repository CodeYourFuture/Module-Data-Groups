function tally(votes) {
    const counts = {};
    votes.forEach(votes => {
      counts[votes] = (counts[votes] ?? 0) + 1;
});

return counts;

}

module.exports = tally;
