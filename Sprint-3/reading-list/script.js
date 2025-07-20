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

const content1 = document.getElementById('content');
const content2 = document.getElementById('reading-list');

function readingList(books) {
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    let listItem = document.createElement('li'); 

    if (book.alreadyRead) { 
      listItem.classList.add('read-book');
    } else {
      listItem.classList.add('unread-book');
    }

    let imageElement = document.createElement('img');
    imageElement.src = book.bookCoverImage;
    imageElement.alt = `${book.title} cover`;
    imageElement.classList.add('book-cover'); 

    let titleElement = document.createElement('h3');
    titleElement.textContent = book.title;
    titleElement.classList.add('book-title');

    let authorElement = document.createElement('p');
    authorElement.textContent = `by: ${book.author}`;
    authorElement.classList.add('book-author');

    listItem.append(imageElement, titleElement, authorElement);
    content2.append(listItem);
  }
}

readingList(books)