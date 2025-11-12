const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780465050659.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    bookCoverImage:
      'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg',
  },
];

const content = document.getElementById("content");
const container = document.getElementById("reading-list");

console.log("Container Element Found:", container);

function readingList(bookArray) {
  for (const singleBook of books) {
    const bookListItem = document.createElement("li");
    const titleElement = document.createElement("h3");
    const authorElement = document.createElement("p");
    const coverImage = document.createElement("img");

    titleElement.textContent = singleBook.title;
    authorElement.textContent = `Author: ${singleBook.author}`;

    coverImage.setAttribute("src", singleBook.bookCoverImage);

    if (singleBook.alreadyRead === true) {
      bookListItem.style.backgroundColor = "#5aec7cff";
    } else {
      bookListItem.style.backgroundColor = "#c00d1cff";
    }

    bookListItem.appendChild(titleElement);
    bookListItem.appendChild(authorElement);
    bookListItem.appendChild(coverImage);
    container.appendChild(bookListItem);
  }
}

readingList(books);
