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

function readingList() {
  const unorderedList = document.querySelector("#reading-list");
  for (const book of books) {
    const newList = document.createElement("li");
    const newImage = document.createElement("img");
    const title = book.title;
    const author = book.author;
    newImage.src = book.bookCoverImage;
    const paragraph = document.createElement("p");
    paragraph.textContent = `${title} by ${author}`;
    newList.appendChild(paragraph);
    newList.appendChild(newImage);
    if (book.alreadyRead) {
      newList.classList.add("read");
    } else {
      newList.classList.add("notRead");
    }

    unorderedList.appendChild(newList);
  }
}
readingList();
