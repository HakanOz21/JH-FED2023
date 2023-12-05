import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import "./LikeButton";
import { getAllBooks } from "../models/API";
import LikeButton from "./LikeButton";
import { Books } from "../models/BooksInterface";

const BookList = () => {
  const [books, setBooks] = useState<Books[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksData = await getAllBooks();
        setBooks(booksData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h3>{book.title}</h3>
          </div>
          <div>{book.author}</div>
          {book.cover ? (
            <div>
              <img src={book.cover} alt="Bild vorhanden" />
            </div>
          ) : (
            <div>
              <p>Kein Bild vorhanden</p>
            </div>
          )}
          <div className="publisher-price-container">
            <div>{book.publisher}</div>
            <div>{book.price}</div>
          </div>
          <div>
            <LikeButton />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
