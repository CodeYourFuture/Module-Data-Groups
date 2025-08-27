// This array must not be modified
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


// Get the UL element where books will be added
const readingList = document.querySelector("#reading-list");

// Loop through the books array and create list items
books.forEach((book) => {
  const li = document.createElement("li");

  // Set background color based on alreadyRead
  li.style.backgroundColor = book.alreadyRead ? "green" : "red";
  li.style.padding = "10px";
  li.style.marginBottom = "10px";
  li.style.listStyle = "none";

  // Create and add book image
  const img = document.createElement("img");
  img.src = book.bookCoverImage;
  img.alt = `${book.title} cover`;
  img.style.width = "100px";
  img.style.display = "block";
  img.style.marginBottom = "5px";
  li.appendChild(img);

  // Create and add book title
  const titleP = document.createElement("p");
  titleP.innerText = book.title;
  li.appendChild(titleP);

  // Create and add book author
  const authorP = document.createElement("p");
  authorP.innerText = book.author;
  li.appendChild(authorP);

  // Add the <li> to the #reading-list
  readingList.appendChild(li);
});