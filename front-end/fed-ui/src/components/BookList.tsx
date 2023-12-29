import React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { indigo } from "@mui/material/colors";
import "../App.css";
import "./LikeButton";
import { getAllBooks } from "../models/API";
import LikeButton from "./LikeButton";
import { Books } from "../models/BooksInterface";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import useBooks from "../models/Hooks.ts";

const BookList = () => {
  const [books, setBooks] = useState<Books[]>([]);
  const maxLength = 20;
  const colorBlue = indigo[700];
  const navigate = useNavigate();
  const { books: fetchBooks, state, refresh } = useBooks();

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

    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {state === "loading" && (
        <p
          style={{ textAlign: "center", fontSize: "1.2em", minHeight: "80vh" }}
        >
          Loading items...
        </p>
      )}
      {state === "error" && (
        <p
          style={{ textAlign: "center", fontSize: "1.2em", minHeight: "80vh" }}
        >
          Error... Couldn't fetch books.
        </p>
      )}
      {state === "success" && (
        <div className="book-list">
          {books.map((book) => (
            <div key={book.id} className="book">
              <Card
                sx={{
                  maxWidth: 300,
                  transform: "scale(0.9)",
                  display: "inline-block",
                  mx: "2px",
                  borderRadius: 5,
                }}
              >
                <CardContent>
                  <div
                    onClick={() => navigate(`/books/${book.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <div>
                      <h2>
                        {book.title.length > maxLength
                          ? book.title.substring(0, maxLength - 3) + "..."
                          : book.title}
                      </h2>
                    </div>
                    <div>
                      <Typography>{book.author}</Typography>
                    </div>
                    {book.cover ? (
                      <CardMedia
                        component="img"
                        alt="Bild vorhanden"
                        image={book.cover}
                      />
                    ) : (
                      <div>
                        <p>Kein Bild vorhanden</p>
                      </div>
                    )}
                  </div>
                  <div className="publisher-price-container">
                    <div>
                      <Typography style={{ color: colorBlue }}>
                        {book.price}
                      </Typography>
                    </div>
                    <div>
                      <LikeButton />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
