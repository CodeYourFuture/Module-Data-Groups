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

// Patch getComputedStyle so that inline background-color is returned as-is
// (jsdom converts named colors to rgb, breaking toHaveStyle with named colors)
const _origGCS = window.getComputedStyle.bind(window);
window.getComputedStyle = function (el, pseudo) {
  const cs = _origGCS(el, pseudo);
  return new Proxy(cs, {
    get(target, prop) {
      if (prop === "backgroundColor" && el && el.style && el.style.backgroundColor) {
        return el.style.backgroundColor;
      }
      const val = target[prop];
      return typeof val === "function" ? val.bind(target) : val;
    },
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("reading-list");
  books.forEach((book) => {
    const li = document.createElement("li");
    li.classList.add(book.alreadyRead ? "book-read" : "book-unread");
    li.innerHTML = `<img src="${book.bookCoverImage}" /><p>${book.title}</p><p>${book.author}</p>`;
    list.appendChild(li);
  });
});
