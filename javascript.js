
function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.getInfo = function() {
    const isRead = read === true ? "I have read " : "I have not read "
    return (title + " by " + author + ", " + pages + " pages.")
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295', true)
const book2 = new Book('LOTR', 'J.R.R. Tolkien', '3000', true)


const myLibrary = [book1, book2]

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

let bookNum = 0

function renderNewBook(num) {
    const h1Title = document.createElement("h1")
    const pAuthor = document.createElement("p")
    const pPages = document.createElement("p")
    const pRead = document.createElement("p")
    
    h1Title.innerText = myLibrary[num].title
    pAuthor.innerText = myLibrary[num].author
    pPages.innerText = myLibrary[num].pages + " pages"
    pRead.innerText = myLibrary[num].read ? "Read" : "Not read"

    const bookDiv = document.createElement("div")
    document.querySelector(".bookshelf").appendChild(bookDiv)
    bookDiv.classList.add('book')
    bookDiv.setAttribute('id', `book${bookNum}`)

    document.querySelector(`#book${bookNum}`).appendChild(h1Title)
    document.querySelector(`#book${bookNum}`).appendChild(pAuthor)
    document.querySelector(`#book${bookNum}`).appendChild(pPages)
    document.querySelector(`#book${bookNum}`).appendChild(pRead)
    
    bookNum++
}

myLibrary.forEach(item => {
    const h1Title = document.createElement("h1")
    const pAuthor = document.createElement("p")
    const pPages = document.createElement("p")
    const pRead = document.createElement("p")
    
    h1Title.innerText = item.title
    pAuthor.innerText = item.author
    pPages.innerText = item.pages  + " pages"
    pRead.innerText = item.read ? "Read" : "Not read"

    const bookDiv = document.createElement("div")
    document.querySelector(".bookshelf").appendChild(bookDiv)
    bookDiv.classList.add('book')
    bookDiv.setAttribute('id', `book${bookNum}`)

    document.querySelector(`#book${bookNum}`).appendChild(h1Title)
    document.querySelector(`#book${bookNum}`).appendChild(pAuthor)
    document.querySelector(`#book${bookNum}`).appendChild(pPages)
    document.querySelector(`#book${bookNum}`).appendChild(pRead)
    
    bookNum++
})
