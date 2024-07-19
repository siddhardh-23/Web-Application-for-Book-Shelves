const bookCardTemplate = document.querySelector("#data-books-template")
const bookCardContainer = document.querySelector("#data-books-cards-container")
const searchBooks = document.querySelector("#search-box")
let books = []
searchBooks.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  books.forEach(book => {
    const isVisible = book.title.toLowerCase().includes(value);
    book.element.classList.toggle("hide", !isVisible)
  })
})
fetch("books.json", {
  method: 'GET',
  "host_permissions": ["https://api.com/*"],
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
  .then(res => res.json())
  .then(data => {
    books = data.map((book, index) => {
      const card = bookCardTemplate.content.cloneNode(true).children[0]//gets the content inside template
      const imageLink = card.querySelector("#data-image")
      const title = card.querySelector("#data-title")
      const author = card.querySelector("#data-author")
      var id = index + 1;
      const status = null
      title.textContent = book.title
      author.textContent = book.author
      imageLink.src = book.imageLink
      const dataId=card.querySelector(".select")
      dataId.id= book.id
      bookCardContainer.append(card)
      // return {imageLink:book.imageLink,title:book.title,author:book.author,status:status, id:id}
      // var newBooks = { imageLink: book.imageLink, title: book.title, author: book.author, status: status, id: id }
      // console.log(newBooks)
    })
    localStorage.setItem("books", JSON.stringify(books))
  })


const selectElement = document.querySelector('#data-books-cards-container');
selectElement.addEventListener('change', (event) => {
  var result = document.querySelector('#selectValue');
  var selectedValue = event.target.value;
  console.log(selectedValue);
  localStorage.getItem("books")
  var localId = newBooks.id
  console.log(localId)
  const BooksList = books.map(e => {
    if (e.id === localId) {
      return { ...e, status: selectedValue };
    }
    return e;
  })
  console.log(BooksList)
  localStorage.setItem("BooksLists", JSON.stringify(BooksList))
});


