
// For the tests, do not modify this array of books
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

const readingList = document.getElementById("reading-list");

function renderBooks() {
  books.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.style.marginBottom = "20px";

    const title = document.createElement("h2");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;

    const coverImage = document.createElement("img");
    coverImage.src = book.bookCoverImage;
    coverImage.alt = `${book.title} cover`;
    coverImage.style.width = "150px";
    coverImage.style.height = "auto";
    coverImage.style.display = "block";
    coverImage.style.marginBottom = "10px";

    const readStatus = document.createElement("p");
    readStatus.textContent = book.alreadyRead
      ? "Status: Already Read"
      : "Status: Not Read Yet";
    readStatus.style.fontWeight = "bold";
    readStatus.style.color = book.alreadyRead ? "green" : "red";

    listItem.appendChild(coverImage);
    listItem.appendChild(title);
    listItem.appendChild(author);
    listItem.appendChild(readStatus);

    readingList.appendChild(listItem);
  });
}

renderBooks();
