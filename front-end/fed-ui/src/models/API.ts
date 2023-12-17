import { Books } from "./BooksInterface";

export const API_URL: string = "http://localhost:4730/books";
export const BOOK_DETAILS_API_URL: string = "http://localhost:4730/books";

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
    console.error("Error:", error);
    throw error;
  }
}

async function getOneBook(id: string) {
  try {
    const response = await fetch(`${BOOK_DETAILS_API_URL}/${id}`);
    if (!response.ok) {
      const returnText = await response.text();
      throw new Error(returnText);
    }
    const oneBook = await response.json();
    return oneBook;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function updateBook(id: string, updatedData: Partial<Books>) {
  try {
    const response = await fetch(`${BOOK_DETAILS_API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      const returnText = await response.text();
      throw new Error(returnText);
    }
    const updatedBook = await response.json();
    return updatedBook;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function deleteBook(isbn: string): Promise<void> {
  try {
    const response = await fetch(`${BOOK_DETAILS_API_URL}/${isbn}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const returnText = await response.text();
      throw new Error(returnText);
    }

    console.log(`Book with ISBN ${isbn} deleted successfully.`);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

async function createBook(bookData: Books): Promise<void> {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    });
    if (!response.ok) {
      const returnText = await response.text();
      throw new Error(returnText);
    }
    const createdBook = await response.json();
    console.log("Created Book:", createdBook);
  } catch (error) {
    console.error("Error:", error);
  }
}

export { getAllBooks, getOneBook, updateBook, createBook, deleteBook };
