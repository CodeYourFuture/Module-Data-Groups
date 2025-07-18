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

const readingList = document.getElementById("reading-list");

for (let book of books){
  const p = document.createElement("p");
  p.innerText = `${book.title}`
  const h1 = document.createElement("h1");
  h1.innerText = `${book.author}`
  const img = document.createElement("img");
  img.src = book.bookCoverImage
// create elements
  const li = document.createElement("li");
  li.appendChild(p);
  li.appendChild(h1);
  li.appendChild(img);
  readingList.appendChild(li);
// condition if it was read.
  if (book.alreadyRead) {
    li.style.backgroundColor = "green";
  } else {
    li.style.backgroundColor = "red"
  }
}
