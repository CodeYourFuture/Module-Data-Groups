   function calculateMedian(list) {
    const sorted = [...list].sort((a, b) => a - b); // don't mutate original
    const middle = Math.floor(sorted.length / 2);
  
    if (sorted.length % 2 === 0) {
      // Even: average the two middle values
      return (sorted[middle - 1] + sorted[middle]) / 2;
    } else {
      // Odd: return the middle value
      return sorted[middle];
    }
  }
  const list = [10, 20, 30, 50, 60];
