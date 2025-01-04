const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(title, author, pages, read) {
  let newbook = new Book(title, author, pages, read)
  myLibrary.push(newbook)
}

// step 3
// make function...
// loop through library array
// display each book on the page

// display on a table
// or diplay on their own 'cards'

// consider the logic for displying books
// and the data structure
// as separate entities

// it helps with maintainability and scalability.

// step 4
// there will be a button to bring up a form to add books
// users will input new book details
// author, title, pages, read, etc
// consider the visual representation of this form
// sidebar? dialog? modal?
// investigate and learn
// then decide

// step 4
// make the form

// step 5
// add a "new book" button

// step 6
// have it bring up the form when clicked

// step 7
// submit input wont work. no server
// use event.preventDefault();
// refer to docs to figure that out

// step 8
// make submit button add to library

// step 9
// add button on each book's display to remove it

// associate DOM elements with book objects somehow
// like giving them a data-attribute
// which corresponds to library array index

// step 10
// create a Book prototype method to toggle read status

// step 11
// add a button to toggle read status