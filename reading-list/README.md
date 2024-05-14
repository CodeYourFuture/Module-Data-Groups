## Project Brief: Reading List

As a user, I want to see a list of books with their titles, authors, book cover images, and background colour based on whether I have read them or not.

### User Stories:

- As a user, I want to see a list of books displayed on the page.
- As a user, I want each book to have a title, author, and book cover image displayed on the page.
- As a user, I want the background color of each book to be set to green if I have read it or red if I have not.
- As a user, I want the list of books to be rendered in a clean and organised format.

### Acceptance Criteria:

- The list of books is displayed on the page as a valid unordered list.
- Each book is displayed with a title and author.
- Each book is displayed with a book cover image inside a link to the book cover URL.
- The background colour of each book is set to green if the "alreadyRead" property of the book object is true, and red if it is false.
- The list item has a title attribute that is set to green if the "alreadyRead" property of the book object is true, and red if it is false.
- The HTML code is inserted with Javascript on page load into a div element with the id "content".
- The JavaScript function is named readingList
- The list of books is displayed in a clean and organized format.
- The Lighthouse score for Accessibility is 100.

### Resources:

Hint: the function **readingList** takes an array of book objects:

```js
const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780465050659.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    bookCoverImage:
      'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg',
  },
  ...
];
```
