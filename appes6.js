class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.querySelector('#book-list');
    // Creat tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X<a></td>
    `;
  
    list.appendChild(row);
  }

  showAlert(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    // Insert Alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.querySelector('#title').value ='';
    document.querySelector('#author').value ='';
    document.querySelector('#isbn').value ='';
  }
}

//Event Listener for add book
document.querySelector('#book-form').addEventListener('submit', function(e){
  //Get form values
  const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value
  
  // Instantiate Book 
  const book = new Book(title, author, isbn);
  console.log(book);

  // Instatitate UI
  const ui = new UI();

  // Validate 
  if(title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
  ui.addBookToList(book);

  // Show sucesss
  ui.showAlert('Book Added!', 'sucess');

  // Clear Fields
  ui.clearFields();
  }

  // Add book to list
  ui.addBookToList(book);

  // Clear Fields
  ui.clearFields();

  e.preventDefault();
});

// Event Listener for delete
document.querySelector('#book-list').addEventListener('click', function(e){
  
  // Instatitate UI
  const ui = new UI();

  ui.deleteBook(e.target);

  // Show message
  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
})
