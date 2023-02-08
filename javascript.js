
function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.getInfo = function() {
    const isRead = this.read === true ? "I have read " : "I have not read "
    return (isRead + this.title + " by " + this.author + ", " + this.pages + " pages.")
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295', true)
const book2 = new Book('LOTR', 'J.R.R. Tolkien', '3000', true)

const myLibrary = [book1, book2]

//initial render for books already in library
myLibrary.forEach((item, index) => {
    renderNewBook(index)
})


function addBook (event) {
    const newTitle = event.target.title.value;
    const newAuthor = event.target.author.value
    const newPages = event.target.pages.value
    const newRead = event.target.read.checked
    
    const newBook = new Book(newTitle, newAuthor, newPages, newRead)
    myLibrary.push(newBook)
    const newestBookNum = myLibrary.length - 1
    console.log(myLibrary)
    renderNewBook(newestBookNum)
    event.preventDefault()
}

function renderNewBook(num) {
    const h1Title = document.createElement("h1")
    const pAuthor = document.createElement("p")
    const pPages = document.createElement("p")
    const btnRead = document.createElement("button")
    const btnDel = document.createElement("button")
    
    h1Title.innerText = myLibrary[num].title
    pAuthor.innerText = myLibrary[num].author
    pPages.innerText = myLibrary[num].pages + " pages"

    btnRead.onclick = toggleRead
    btnRead.setAttribute("id", `btn${num}`)
    btnRead.innerText = myLibrary[num].read ? "Read" : "Not read"

    btnDel.onclick = removeBook
    btnDel.setAttribute("id", `btnDel${num}`)
    btnDel.innerText = "X"

    const bookDiv = document.createElement("div")
    document.querySelector(".bookshelf").appendChild(bookDiv)
    bookDiv.classList.add('book')
    bookDiv.setAttribute('id', `book${num}`)

    document.querySelector(`#book${num}`).appendChild(h1Title)
    document.querySelector(`#book${num}`).appendChild(pAuthor)
    document.querySelector(`#book${num}`).appendChild(pPages)
    document.querySelector(`#book${num}`).appendChild(btnRead)
    document.querySelector(`#book${num}`).appendChild(btnDel)
}


function toggleRead(event) {
    const bookId = event.target.id
    const id = bookId.slice(bookId.length-1)
    
    myLibrary[id].read = !myLibrary[id].read
    
    document.querySelector(`#${bookId}`).innerText = myLibrary[id].read ? "Read" : "Not read"
}

function removeBook(event) {
    const bookId = event.target.id
    const id = bookId.slice(bookId.length-1)
    myLibrary.splice(id, 1)

    const removeBookElement = document.querySelector(`#book${id}`)
    removeBookElement.remove()
}
