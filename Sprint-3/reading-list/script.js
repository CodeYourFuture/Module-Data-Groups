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

for(let book of books){
  const list = document.createElement("li");

  const title = document.createElement("h1");
  title.innerText = `${book.title}`;

  const paragraph = document.createElement("p");
  paragraph.innerText = `${book.author}`;

  const image = document.createElement("img");
  image.src = book.bookCoverImage;

  image.alt = "The Pragmatic Programmer";

  if(book.alreadyRead){
    list.style.backgroundColor = "green";
  }else{
    list.style.backgroundColor = "red";
  }

  list.appendChild(title);
  list.appendChild(paragraph);
  list.appendChild(image);
  readingList.appendChild(list);
}