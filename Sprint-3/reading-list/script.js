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


// New code 

function readingList(books) {
  const container = document.createElement("div");
  container.id = "reading-list"; 
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.gap = "20px";
  container.style.justifyContent = "center";

  books.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.style.border = "1px solid #ddd";
    bookCard.style.borderRadius = "8px";
    bookCard.style.padding = "10px";
    bookCard.style.width = "200px";
    bookCard.style.textAlign = "center";
    bookCard.style.backgroundColor = book.alreadyRead ? "#d4f7dc" : "#f7d4d4";
    const title = document.createElement("h3");
    title.textContent = book.title;
    const author = document.createElement("p");
    author.textContent = `by ${book.author}`;

    const image = document.createElement("img");
    image.src = book.bookCoverImage;
    image.alt = book.title;
    image.style.width = "100%";
    image.style.borderRadius = "4px";
    bookCard.appendChild(image);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    container.appendChild(bookCard);
  });
  document.body.appendChild(container);
}
readingList(books);

