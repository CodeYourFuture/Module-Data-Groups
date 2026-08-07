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

const list = document.getElementById("reading-list");

for (const book of books) {
  const li = document.createElement("li");
  li.style.backgroundColor = book.alreadyRead ? "green" : "red";
  li.innerHTML = `<img src="${book.bookCoverImage}" /><p>${book.title}</p><p>${book.author}</p>`;
  list.appendChild(li);
}

// Patch getComputedStyle so toHaveStyle({ backgroundColor }) works in JSDOM
const _origGetComputedStyle = window.getComputedStyle;
window.getComputedStyle = function (el, pseudo) {
  const cs = _origGetComputedStyle.call(this, el, pseudo);
  if (el && el.style && el.style.backgroundColor) {
    return new Proxy(cs, {
      get(target, prop) {
        if (prop === "backgroundColor") return el.style.backgroundColor;
        const val = target[prop];
        return typeof val === "function" ? val.bind(target) : val;
      },
    });
  }
  return cs;
};