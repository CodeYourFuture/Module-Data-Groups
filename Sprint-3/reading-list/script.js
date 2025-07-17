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

function readingList(books) {
  let listDom = document.getElementById("reading-list");

  for (let book of books) {
    let bookDom = document.createElement("li");
    if (book.alreadyRead) {
      bookDom.classList.add("alreadyRead");
    }

    let titleDom = document.createElement("h1");
    titleDom.textContent = book.title;
    bookDom.appendChild(titleDom);

    let authorDom = document.createElement("p");
    authorDom.textContent = book.author;
    bookDom.appendChild(authorDom);

    let imgDom = document.createElement("img");
    let src = book.bookCoverImage;
    imgDom.setAttribute("src", src);
    bookDom.appendChild(imgDom);

    listDom.appendChild(bookDom);
  }
}

readingList(books);

