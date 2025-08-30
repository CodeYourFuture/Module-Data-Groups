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

function displayBooks(books) {
  const content = document.getElementById("content");

  const list = document.createElement("ul");
  list.id = "reading-list";

  books.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.classList.add("book");

    listItem.style.backgroundColor = book.alreadyRead ? "green" : "red";

    const bookCover = document.createElement("img");
    bookCover.src = book.bookCoverImage;
    bookCover.alt = `${book.title} cover`;

    const bookTitle = document.createElement("p");
    bookTitle.innerText = book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.innerText = `by ${book.author}`;

    listItem.appendChild(bookCover);
    listItem.appendChild(bookTitle);
    listItem.appendChild(bookAuthor);

    list.appendChild(listItem);
  });

  content.appendChild(list);
}

displayBooks(books);
