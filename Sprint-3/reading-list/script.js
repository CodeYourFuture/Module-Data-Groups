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
const contentDiv = document.getElementById("content");

// Create a container for the books
const booksContainer = document.createElement("ul");
booksContainer.id = "books-container";
contentDiv.appendChild(booksContainer);

books.forEach((book) => {
  const bookElement = document.createElement("div");
  bookElement.style.border = "1px solid #ccc";
  bookElement.style.margin = "10px";
  bookElement.style.padding = "10px";
  bookElement.style.display = "flex";
  bookElement.style.alignItems = "center";
  bookElement.style.gap = "15px";

  const bookImage = document.createElement("img");
  bookImage.src = book.bookCoverImage;
  bookImage.alt = book.title;
  bookImage.style.width = "100px";
  bookImage.style.height = "150px";

  const bookInfo = document.createElement("div");

  const bookTitle = document.createElement("h3");
  bookTitle.textContent = book.title;

  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = `Author: ${book.author}`;

  const readStatus = document.createElement("p");
  readStatus.textContent = book.alreadyRead ? "Already read" : "Not read yet";

  bookInfo.appendChild(bookTitle);
  bookInfo.appendChild(bookAuthor);
  bookInfo.appendChild(readStatus);

  bookElement.appendChild(bookImage);
  bookElement.appendChild(bookInfo);

  booksContainer.appendChild(bookElement);
});
