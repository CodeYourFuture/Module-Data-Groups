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




/**
 * Render the reading list into the DOM.
 * Expects an element with id="reading-list" in index.html (e.g. <ul id="reading-list"></ul>)
 */




function readingList() {
  const unorderedList = document.querySelector("#reading-list");

  books.forEach((book) => {
    const li = document.createElement("li");

    // Image first
    const img = document.createElement("img");
    img.src = book.bookCoverImage;
    img.alt = `${book.title} by ${book.author} — book cover`;
    img.loading = "lazy";
    li.appendChild(img);

    // Text
    const p = document.createElement("p");
    p.innerText = `${book.title} by ${book.author}`;
    li.appendChild(p);

    // Inline background color (Jest reads this)
    li.style.backgroundColor = book.alreadyRead ? "red" : "green";

    unorderedList.appendChild(li);
  });
}

// ---- FIX FOR JSDOM ----
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", readingList);
} else {
  readingList();
}
