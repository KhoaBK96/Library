const myLibrary = []
let bookCount = 1;
const removes = []
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read == 'read' ? 'Read' : 'Not read'
    this.bookCount = bookCount
}

function displayBooks(books){
    let html = ''
    books.forEach(book => {
        html += `<div class='card' data-attribute=${book.bookCount}>
            <h3>${book.title}</h3>
            <h3>${book.author}</h3>
            <h3>${book.pages}</h3>
            <button id='readBtn' class='btn'>${book.read}</button>
            <button id = 'remove${book.bookCount}' class='btn'>Remove</button>
        </div>`
    });
    document.querySelector('.book-grid').innerHTML= html
   
}


const addBookBtn = document.querySelector('.addBook')
const bookDialog = document.querySelector('.bookDialog')
const submit = document.getElementById('confirmBtn')
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const read = document.getElementById('read')
const cancel = document.getElementById('cancel')

addBookBtn.addEventListener('click', () => bookDialog.showModal())

submit.addEventListener('click', e => {
    if(title.value != ''&& author.value != '' && pages.value !='' && read.value !=''){
    let book = new Book(title.value, author.value, pages.value, read.value, bookCount)
    myLibrary.push(book)
    displayBooks(myLibrary)
    title.value=''
    author.value=''
    pages.value=''
    bookCount += 1
}
    
})

cancel.addEventListener('click', () => {
title.value=''
author.value=''
pages.value=''
read.value=''
bookDialog.close()
}
)

