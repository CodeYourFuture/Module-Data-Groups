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
function setup() {
  const readingList = document.getElementById("reading-list");
  books.map((book) => {
    const listBook = document.createElement("li");
    listBook.style.backgroundColor = book.alreadyRead ? "Red" : "Green";
    listBook.style.height = "20%";
    listBook.style.width = "40vw";
    listBook.style.marginBottom = "10px";
    //p tag inside li
    const bookTitle = document.createElement("p");
    bookTitle.textContent = book.title + " ";
    //span tag inside p tag
    const authorSpan = document.createElement("span");
    authorSpan.textContent = book.author;
    bookTitle.appendChild(authorSpan);
    const img = document.createElement("img");
    img.src = book.bookCoverImage;
    img.alt = book.title;
    img.style.height = "81%";
    img.style.width = "auto";
    listBook.appendChild(bookTitle);
    listBook.appendChild(img);

    readingList.appendChild(listBook);
  });
}
window.onload = setup;
