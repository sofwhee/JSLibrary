const booksContainer = document.querySelector("#booksContainer");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.toggleRead = function() {
  if (this.read == "yes") {
    this.read = "no"
  } else {
    this.read = "yes"
  }
}

function addBookToDisplay(book, bookIndex) {
  let bookList = document.createElement("ol")
  bookList.classList.add("book")
  bookList.setAttribute('data-bookNumber', bookIndex)

  let bookRemove = document.createElement("button")
  bookRemove.textContent = "X"
  bookRemove.classList.add("bookRemover", "sourGummy")
  bookList.appendChild(bookRemove)  

  let bookRead = document.createElement("button")
  bookRead.textContent = "✔"
  bookRead.classList.add("bookReader", "sourGummy")
  bookList.appendChild(bookRead)  

  for (const [key, value] of Object.entries(book)) {
    let bookKeyValuePair = document.createElement("ol")
    bookKeyValuePair.classList.add("bookSection")

    let bookKey = document.createElement("li")
    bookKey.textContent = key
    bookKey.classList.add("bookKey", `${key}`)
    bookKeyValuePair.appendChild(bookKey)

    let bookValue = document.createElement("li")
    bookValue.textContent = value
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

let bookReaders = document.querySelectorAll(".bookReader")
bookReaders = Array.from(bookReaders)

bookReaders.forEach((reader) => {
  reader.addEventListener("click", function(event) {
    const bookElement = reader.parentNode
    const bookIndex = bookElement.getAttribute("data-booknumber")
    const bookObject = myLibrary[bookIndex]
    bookObject.toggleRead()

    const bookReadKey = bookElement.getElementsByClassName("read")[0]
    const bookReadValue = bookReadKey.nextElementSibling
    bookReadValue.innerText = bookObject.read

    reader.classList.toggle("bookUnreader")
  })

  const bookElement = reader.parentNode
  const bookIndex = bookElement.getAttribute("data-booknumber")
  const bookObject = myLibrary[bookIndex]
  
  if (bookObject.read == "yes") {reader.classList.toggle("bookUnreader")}
})

let bookRemovers = document.querySelectorAll(".bookRemover")
bookRemovers = Array.from(bookRemovers)

bookRemovers.forEach((remover) => {
  remover.addEventListener("click", function(event) {
    const bookElement = remover.parentNode
    const bookIndex = bookElement.getAttribute("data-booknumber")
    myLibrary.splice(bookIndex, 1)
    bookElement.remove()
  })
})

// add checked functionality