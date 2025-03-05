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

const ulElement = document.getElementById("reading-list");

let index = 0;

for (let book of books) {
  let liElement = document.createElement("li");
  liElement.innerHTML = `<p>${book.title} by ${book.author}</p>
                          <img src="${book.bookCoverImage}" alt="${book.title} cover" style="width:400px">`;

  if (book.alreadyRead) {
    liElement.style.backgroundColor = "green";
  } else {
    liElement.style.backgroundColor = "red";
  }
  ulElement.appendChild(liElement);
}
