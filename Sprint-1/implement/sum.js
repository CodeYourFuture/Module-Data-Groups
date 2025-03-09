function sum(elements) {
     let count = 0
     elements.forEach((element) => {
        if (!isNaN(element) && element !==""){

            count += Number(element);
        }
    });
 

return count;
}
module.exports = sum;


