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

function readingList(){
  let list = document.getElementById("reading-list");

  for (let i = 0; i < books.length; i++){
    let bookCard = document.createElement("li");
    let alreadyRead = books[i].alreadyRead;
    if (alreadyRead) {
      bookCard.classList.add("alreadyRead");
    }

    let title = document.createElement("h1");
    title.textContent = books[i].title;
    bookCard.appendChild(title);


    let author = document.createElement("p");
    author.textContent = books[i].author;
    bookCard.appendChild(author);

    let img =document.createElement("img");
    let src = books[i].bookCoverImage;
    img.setAttribute("src", src);
    bookCard.appendChild(img);

    list.appendChild(bookCard);
  }
}

readingList();
