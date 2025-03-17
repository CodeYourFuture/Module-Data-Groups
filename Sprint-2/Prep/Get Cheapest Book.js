function getCheapestBook(book1, book2) {
    return book1.cost < book2.cost ? book1.title : book2.title;
}

module.exports = getCheapestBook;
