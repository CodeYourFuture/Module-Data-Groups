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

const readingList = document.querySelector("#reading-list");

//function displayBooks(books){
  for (let book of books){
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    h1.innerText = `${book.title}`;
    const p = document.createElement("p");
    p.innerText = `By ${book.author}`;
    const lineBreak = document.createElement("br")
    const img = document.createElement("img");
    img.src = book.bookCoverImage;
    img.alt = "The Pragmatic Programmer";

    li.style.margin = "10px";
    li.style.padding = "5px";
    li.style.fontFamily =
      "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
    if (book.alreadyRead) {
      li.style.backgroundColor = "green";
    } else {
      li.style.backgroundColor = "red";
    }

    li.appendChild(h1);
    li.appendChild(p);   
    li.appendChild(lineBreak);
    li.appendChild(img);
    readingList.appendChild(li);

  }
//}