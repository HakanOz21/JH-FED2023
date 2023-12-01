import { Books } from "./BooksInterface";

export const API_URL: string = "http://localhost:4730/books?_limit=12";

 async function getAllBooks(): Promise<Books[]> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      const returnText = await response.text();
      throw new Error(returnText);
    }
    const books: Books[] = await response.json();
    return books;
  } catch (error) {
    console.error('Error:', error);
    throw error; 
  }
}
/*
async function getOneBook(isbn: string): Promise<Books[]> {
  try {
    const response = await fetch(`${API_URL}/${isbn}`);
    if (!response.ok) {
      const returnText = await response.text();
      throw new Error(returnText);
    }
    const oneBook = await response.json();
    console.log(oneBook);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function deleteBook(isbn: string): Promise<void> {
  try {
    const response = await fetch(`${API_URL}/${isbn}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const returnText = await response.text();
      throw new Error(returnText);
    }
    const deletedBook = await response.json();
    console.log('Deleted Book:', deletedBook);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function createBook(isbn: string, title: string, id: string): Promise<void> {
  try {
    const requestData: Books = {
      isbn,
      title,
      id,
    };
    const response = await fetch(API_URL, {
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
    console.error('Error:', error);
  }
}

async function updateBook(isbn: string, title: string, id: string): Promise<void> {
  try {
    const requestData = {
      isbn,
      title,
      id,
    };
    const response = await fetch(`${API_URL}/${isbn}`, {
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
    console.error('Error:', error);
  }
}*/

export { getAllBooks }; 
