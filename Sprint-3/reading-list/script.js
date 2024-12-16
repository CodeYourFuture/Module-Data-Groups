function readingList(books) {
  const readingListContainer = document.getElementById("reading-list");

  books.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.classList.add("book-item", book.alreadyRead ? "green" : "red");

    const titleAuthor = document.createElement("h3");
     titleAuthor.innerHTML = `<span style="font-size: 2rem;">${book.title}<span>
     <span style="font-size: 1.5rem;">by </span>
     <span style="font-size: 2rem;">${book.author}</span>`;
    listItem.appendChild(titleAuthor);

    const coverImage = document.createElement("img");
    coverImage.src = book.bookCoverImage;
    listItem.appendChild(coverImage);

    readingListContainer.appendChild(listItem);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  readingList(books);
});

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

