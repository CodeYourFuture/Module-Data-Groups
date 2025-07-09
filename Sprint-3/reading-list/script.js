<<<<<<< Updated upstream
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

=======
// for the tests, do not modify this array of books

function renderBooks(){
  const readingList = document.createElement("div");
  // bookList.className = "book-list"; the fault in my stars.
  readingList.id = "reading-list";

  books.forEach((book) => {
    const bookItem = document.createElement("div");
    bookItem.className = "book-item";
    bookItem.style.backgroundColor = book.alreadyRead ? "red" : "white" ;

    const bookTitle = document.createElement("h2");
    bookTitle.innerText = `Title: ${book.title}`;

    const bookAuthor = document.createElement("p");
    bookAuthor.innerText = `Author: ${book.author}`;

    const bookImage = document.createElement("img");
    bookImage.src = book.bookCoverImage;
    bookImage.alt = `Image missing ${book.title}`;

    bookItem.appendChild(bookTitle);
    bookItem.appendChild(bookAuthor);
    bookItem.appendChild(bookImage);
    readingList.appendChild(bookItem);
  });
  document.body.appendChild(readingList);
}

window.onload = renderBooks;

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

>>>>>>> Stashed changes
