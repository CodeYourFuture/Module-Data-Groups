function sum(elements) {
    let count = 0;
    elements.forEach((element) => { 
      if (!isNaN(element) && element !== "") {
        count += Number(element);
      }
    });
    return count;
  }
  

console.log(sum(["1", "2", 5, 5, 5, "3", "a", "hey"]));

module.exports = sum;
