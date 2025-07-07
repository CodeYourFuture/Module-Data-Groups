// For the tests, do not modify this array of books
let books = [];

fetch('books.json')
  .then((res) => {
    if (!res.ok) {
      throw new Error("Books are not fetched correctly");
    }
    return res.json();
  })
  .then((data) => {
    books = data;
    renderReadingList(); 
  })
  .catch((err) => {
    document.getElementById("reading-list").textContent = "Could not load books.";
    console.error("Error encountered:", err);
  });


const renderReadingList = () => {
  const colors = ["#f9c2ff", "#c2f0fc", "#ffe5b4", "#d0f0c0", "#f4cccc"];
  const mainWrapper = document.getElementById("content");
  const readingList = document.getElementById("reading-list");
  mainWrapper.style.backgroundColor = "#51e2f5"
  mainWrapper.style.width = "100%"
  mainWrapper.style.height = "100%"

  books.forEach((book, index) => {
    const li = document.createElement("li");
    li.style.margin = "1rem 10rem";

    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "flex-start";
    wrapper.style.gap = "1rem";
    wrapper.style.backgroundColor = colors[index % colors.length];
    wrapper.style.padding = "2rem";
    wrapper.style.borderRadius = "12px";
    wrapper.style.width = "100%";

  
    const img = document.createElement("img");
    img.src = book.bookCoverImage;
    img.alt = `Cover of ${book.title}`;
    img.style.width = "100px";  
    img.style.borderRadius = "8px";

    const bookInfo = document.createElement("div");
    bookInfo.style.fontSize = "1.5rem";
    bookInfo.innerHTML = `
      <strong>${book.title}</strong><br>
      by ${book.author}<br>
      <em>${book.alreadyRead ? " Already read" : "To read"}</em>
    `;

    wrapper.appendChild(img);   
    wrapper.appendChild(bookInfo); 

    li.appendChild(wrapper);
    readingList.appendChild(li);
  });

};

