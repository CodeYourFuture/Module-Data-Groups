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
  const readingListElement = document.querySelector("#reading-list");

  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.style.backgroundColor = book.alreadyRead ? 'green' : 'red';

    const titleAuthor = document.createElement("p");
    titleAuthor.textContent = `${book.title} by ${book.author}`;

    const coverImage = document.createElement("img");
    coverImage.src = book.bookCoverImage;
    //coverImage.alt = `Cover of ${book.title}`; // this make the test fail

    listItem.appendChild(titleAuthor);
    listItem.appendChild(coverImage);

    readingListElement.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  readingList(books);
});
// for the tests, do not modify this array of books


