// FUNCTION: readingList - This function takes an array of book objects and displays them on the webpage
function readingList(books) {
  // STEP 1: Get the reading list container from the HTML
  // document.getElementById finds the <ul> element with id="reading-list" from our HTML
  // We store it in a variable called 'readingList' so we can add books to it later
  const readingList = document.getElementById("reading-list");

  // STEP 2: Loop through each book in the array
  // books.forEach goes through each book object in the books array, one by one
  // For each book, it runs the code inside the curly braces {}
  books.forEach((book) => {
    // STEP 3: Create a list item for each book
    // document.createElement("li") makes a new empty <li> element (list item)
    // We store this new list item in a variable called 'listItem'
    // This <li> will be the container for one book's information
    const listItem = document.createElement("li");

    // STEP 4: Set background color based on reading status
    // Check if the book has been read (book.alreadyRead is true or false)
    // If book.alreadyRead is true, make the background green
    // If book.alreadyRead is false, make the background red
    // This visually shows which books we've read and which we haven't
    if (book.alreadyRead) {
      listItem.style.backgroundColor = "green"; // Read books = green
    } else {
      listItem.style.backgroundColor = "red"; // Unread books = red
    }

    // STEP 5: Create the book content as HTML string
    // We use backticks `` to create a template string that can span multiple lines
    // ${} inside the template lets us insert JavaScript variables
    // This creates the HTML structure for one book with:
    // - Book cover image
    // - Book title
    // - Book author
    // - Reading status text
    const bookContent = `
      <div class="book">
        <img src="${book.bookCoverImage}" alt="${book.title} cover">
        <div class="book-info">
          <h3>${book.title}</h3>
          <p>by ${book.author}</p>
          <p class="reading-status">${
            book.alreadyRead ? "Already read" : "Not read yet"
          }</p>
        </div>
      </div>
    `;

    // STEP 6: Add the content to the list item
    // listItem.innerHTML takes our HTML string from bookContent
    // and puts it inside the <li> element we created earlier
    // Now our empty <li> is filled with the book's information
    listItem.innerHTML = bookContent;

    // STEP 7: Add the list item to the reading list
    // readingList.appendChild takes our completed list item (with book content)
    // and adds it to the <ul> element on the webpage
    // This makes the book visible to the user
    readingList.appendChild(listItem);
  });
}

// THE ARRAY OF BOOKS: This is our data - a list of book objects
// Each book object has:
// - title: the book's name
// - author: who wrote the book
// - alreadyRead: true/false if we've read it
// - bookCoverImage: URL to the book's cover picture
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

// STEP 8: Call the function to render the reading list
// This executes the readingList function and passes our books array to it
// The function will then create and display all the books on the webpage
readingList(books);
