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

function readingList(bookList) {
  const readingListElement = document.getElementById("reading-list");

  readingListElement.innerHTML = "";

  for (const book of bookList) {
    const listItem = document.createElement("li");
    const titleElement = document.createElement("h2");
    const authorElement = document.createElement("p");
    const imageElement = document.createElement("img");

    titleElement.textContent = book.title;
    authorElement.textContent = book.author;
    imageElement.src = book.bookCoverImage;

    const backgroundColour = book.alreadyRead ? "green" : "red";
    listItem.style.setProperty("background-color", backgroundColour);

    listItem.append(titleElement, authorElement, imageElement);
    readingListElement.appendChild(listItem);
  }
}

window.onload = () => {
  readingList(books);
};
