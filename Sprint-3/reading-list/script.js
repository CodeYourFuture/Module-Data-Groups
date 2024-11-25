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

let list = document.querySelector("#reading-list");

books.forEach(item => {
  let book = document.createElement('li')
  book.innerHTML = `<div class="book-title">"${item.title}"</div>
  <img src = ${item.bookCoverImage} alt= "book cover">
  <button class= "btn">change status</button>`;
  book.classList.add('book')
  if (item.alreadyRead) {
    book.classList.add("been-read");
  } else {
    book.classList.add("not-read");
  }
  list.appendChild(book)
})

const buttons = document.querySelectorAll('.btn')
buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.target.parentElement.classList.toggle("been-read");
    e.target.parentElement.classList.toggle("not-read");
  })
})