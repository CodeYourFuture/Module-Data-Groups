function readingList(books) {
  const list = document.getElementById("reading-list");

  books.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.classList.add("book");
    listItem.style.backgroundColor = book.alreadyRead ? "green" : "red";

    const image = document.createElement("img");
    image.src = book.bookCoverImage;
    image.alt = `Cover of ${book.title}`;

    const details = document.createElement("div");
    details.classList.add("book-details");

    const title = document.createElement("span");
    title.classList.add("book-title");
    title.textContent = book.title;

    const author = document.createElement("span");
    author.classList.add("book-author");
    author.textContent = `by ${book.author}`;

    details.appendChild(title);
    details.appendChild(author);

    listItem.appendChild(image);
    listItem.appendChild(details);

    list.appendChild(listItem);
  });
}
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

readingList(books);
