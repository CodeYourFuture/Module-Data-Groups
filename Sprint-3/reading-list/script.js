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


const list = document.getElementById('reading-list');

function readingList(books){
  books.forEach((book) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    list.appendChild(listItem);
    listItem.style.backgroundColor =  book.alreadyRead ? 'green' : 'red';

    const span = document.createElement('span');
    span.textContent = `${book.title} by ${book.author}`;
    listItem.appendChild(span);

    const image = document.createElement('img');
    image.setAttribute('src', book.bookCoverImage);
    listItem.appendChild(image)
  })
}

readingList(books);