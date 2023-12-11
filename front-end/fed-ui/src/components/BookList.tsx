import React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { indigo } from "@mui/material/colors";
import "../App.css";
import "./LikeButton";
import { getAllBooks } from "../models/API";
import LikeButton from "./LikeButton";
import { Books } from "../models/BooksInterface";

const BookList = () => {
  const [books, setBooks] = useState<Books[]>([]);
  const maxLength = 30;
  const colorBlue = indigo[700];

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
            <h3>
              {book.title.length > maxLength
                ? book.title.substring(0, maxLength - 3) + "..."
                : book.title}
            </h3>
          </div>
          <div>
            <Typography>{book.author}</Typography>
          </div>
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
            {/*             <div>
              <Typography>{book.publisher}</Typography>
            </div> */}
            <div>
              <Typography style={{ color: colorBlue }}>{book.price}</Typography>
            </div>
            <div>
              <LikeButton />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
