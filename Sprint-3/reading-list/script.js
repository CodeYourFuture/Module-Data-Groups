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
  const readingListUl = document.getElementById("reading-list");

  for (let i = 0; i < books.length; i++) {
    const li = document.createElement("li");
    const bookDetails = document.createTextNode(
      `${books[i].title} by ${books[i].author}`
    );

    li.classList.add("book-card");
    li.appendChild(bookDetails);

    if (books[i].alreadyRead) {
      li.classList.add("read"); // If true, add the 'read' class
    } else {
      li.classList.add("not-read"); // If false, add the 'not-read' class
    }

    const bookImg = document.createElement("img");
    bookImg.src = books[i].bookCoverImage;
    bookImg.alt = `cover of ${books[i].title}`;
    bookImg.style.width = "150px";

    li.appendChild(document.createElement("br"));
    li.appendChild(bookImg);

    readingListUl.appendChild(li);
  }
}

readingList(books);
