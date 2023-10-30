const url = "http://localhost:4730/books"


async function getAllBooks() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        const returnText = await response.text();
        throw new Error(returnText);
      }
      const books = await response.json();
      console.log(books);
    } catch (error) {
      console.error('Error:', error.message);
    }
}

async function getOneBook(isbn) {
    try {
      const response = await fetch(url + "/" + isbn);
      if (!response.ok) {
        const returnText = await response.text();
        throw new Error(returnText);
      }
      const oneBook = await response.json();
      console.log(oneBook);
    } catch (error) {
      console.error('Error:', error.message);
    }
}

async function deleteBook(isbn) {
    try {

      const response = await fetch(`${url}/${isbn}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const returnText = await response.text();
        throw new Error(returnText);
      }
    
      const deletedBook = await response.json();
      console.log('Deleted Book:', deletedBook);
    } catch (error) {
      console.error('Error:', error.message);
    }
}

async function createBook(isbn, title, id) {
    try {
        const requestData = {
          isbn,
          title,
          id,
        };
    
        const response = await fetch(url, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });

      if (!response.ok) {
        const returnText = await response.text();
        throw new Error(returnText);
      }
    
      const createBook = await response.json();
      console.log('created Book:', createBook);
    } catch (error) {
      console.error('Error:', error.message);
    }
}

async function updateBook(isbn, title, id) {
    try {
      const requestData = {
        isbn,
        title,
        id,
      };
  
      const response = await fetch(`${url}/${isbn}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
  
      if (!response.ok) {
        const returnText = await response.text();
        throw new Error(returnText);
      }
  
      const updatedBook = await response.json();
      console.log('Updated Book:', updatedBook);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

export {getAllBooks, getOneBook, deleteBook, createBook, updateBook}