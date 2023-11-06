const url: string = "http://localhost:4730/books";

async function getAllBooks(): Promise<void> {
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

async function getOneBook(isbn: string): Promise<void> {
  try {
    const response = await fetch(`${url}/${isbn}`);
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

async function deleteBook(isbn: string): Promise<void> {
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

async function createBook(isbn: string, title: string, id: string): Promise<void> {
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
    const createdBook = await response.json();
    console.log('Created Book:', createdBook);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function updateBook(isbn: string, title: string, id: string): Promise<void> {
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

export { getAllBooks, getOneBook, deleteBook, createBook, updateBook };
