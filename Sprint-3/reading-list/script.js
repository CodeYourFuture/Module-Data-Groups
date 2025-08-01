function createReadingList(books) {
  const bookList = document.getElementById("reading-list");

  books.forEach((book) => {
    const bookItem = document.createElement("li");
    bookItem.classList.add("book");
    bookItem.classList.add(book.alreadyRead ? "read" : "unread");

    const titleElement = document.createElement("h3");
    titleElement.textContent = book.title;

    const authorElement = document.createElement("p");
    authorElement.textContent = `by ${book.author}`;

    const imageElement = document.createElement("img");
    imageElement.src = book.bookCoverImage;

    bookItem.appendChild(titleElement);
    bookItem.appendChild(authorElement);
    bookItem.appendChild(imageElement);

    bookList.appendChild(bookItem);
  });
}

// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];
createReadingList(books);
