const booksContainer = document.querySelector("#booksContainer");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToDisplay(book, bookIndex) {
  let bookList = document.createElement("ol")
  bookList.classList.add("book")
  bookList.setAttribute('data-bookNumber', bookIndex)

  let bookRemove = document.createElement("button")
  bookRemove.textContent = "X"
  bookRemove.classList.add("bookRemover", "sourGummy")
  bookList.appendChild(bookRemove)  

  for (const [key, value] of Object.entries(book)) {
    let bookKeyValuePair = document.createElement("ol")
    bookKeyValuePair.classList.add("bookSection")

    let bookKey = document.createElement("li")
    bookKey.textContent = key
    bookKey.classList.add("bookKey")
    bookKeyValuePair.appendChild(bookKey)

    let bookValue = document.createElement("li")
    bookValue.textContent = value
    bookValue.classList.add("bookValue")
    bookKeyValuePair.appendChild(bookValue)

    bookList.appendChild(bookKeyValuePair)
  }

  booksContainer.appendChild(bookList)
}

function addBookToLibrary(title, author, pages, read) {
  if (read == true) { 
    read = "yes" 
  } else {
    read = "no"
  }

  let newbook = new Book(title, author, pages, read)
  myLibrary.push(newbook)
  addBookToDisplay(newbook, myLibrary.indexOf(newbook))
}

addBookToLibrary("Howdy", "Duke Wellington", 15, false)
addBookToLibrary("Howdy2", "Duke Wellington", 12, false)
addBookToLibrary("Boopo", "Marge Bimple", 20, true)
addBookToLibrary("The Legend of Looking At This Website", "You", 999, true)

const dialogAddBook = document.querySelector("#dialogAddBook")
const dialogOpener = document.querySelector("#dialogOpener")
const dialogSubmit = document.querySelector("#dialogSubmit")
const dialogCloser = document.querySelector("#dialogCloser")

dialogOpener.addEventListener("click", () => {
  dialogAddBook.showModal()
})

dialogCloser.addEventListener("click", () => {
  dialogAddBook.close()
})

dialogSubmit.addEventListener("click", function(event){
  event.preventDefault()

  const bookForm = document.querySelector("form")

  const title = bookForm.elements.namedItem("bookTitle").value
  const author = bookForm.elements.namedItem("author").value
  const pages = bookForm.elements.namedItem("pages").value
  const read = bookForm.elements.namedItem("read").value

  addBookToLibrary(title, author, pages, read)
  dialogAddBook.close()
})

let bookRemovers = document.querySelectorAll(".bookRemover")
bookRemovers = Array.from(bookRemovers)

bookRemovers.forEach((remover) => {
  remover.addEventListener("click", function(event) {
    bookElement = remover.parentNode
    bookIndex = bookElement.getAttribute("data-booknumber")
    myLibrary.splice(bookIndex, 1)
    bookElement.remove()
  })
})

// step 8 style form

// step 9
// add button on each book's display to remove it

// associate DOM elements with book objects somehow
// like giving them a data-attribute
// which corresponds to library array index

// step 10
// create a Book prototype method to toggle read status

// step 11
// add a button to toggle read status