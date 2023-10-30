import { expect, test } from 'vitest';
import { getAllBooks } from './api.js';

test('fetch all books', async () => {
  const allBooks = await getAllBooks();
  
  // Add assertions to check the response
  expect(allBooks).toBeDefined();
  expect(Array.isArray(allBooks)).toBe(true);
  expect(allBooks.length).toBeGreaterThan(0);

  // You can add more specific assertions based on the API response data
  // For example, you can check if certain properties exist or have specific values
  allBooks.forEach(book => {
    expect(book.id).toBeDefined();
    expect(book.title).toBeDefined();
    expect(book.price).toBeDefined();
    // Add more assertions as needed
  });
});
