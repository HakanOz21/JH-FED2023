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
import noimage from "../noimage.jpg"

const BookList = () => {
  const [books, setBooks] = useState<Books[]>([]);
  const maxLength = 20;
  const colorBlue = indigo[700];
  const navigate = useNavigate();
  const { books: fetchBooks, state, refresh } = useBooks();

  // Fetch books and setup interval for auto-refresh
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

    const intervalId = setInterval(fetchData, 3000); // Refresh every 60 seconds

    return () => clearInterval(intervalId); // Cleanup function clears the interval when component unmounts
  }, []);

  // JSX rendering
  return (
    <div>
      {/* Loading state */}
      {state === "loading" && (
        <p
          style={{ textAlign: "center", fontSize: "1.2em", minHeight: "80vh" }}
        >
          Loading items...
        </p>
      )}
      {/* Error state */}
      {state === "error" && (
        <p
          style={{ textAlign: "center", fontSize: "1.2em", minHeight: "80vh" }}
        >
          Error... Couldn't fetch books.
        </p>
      )}
      {/* Success state */}
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
                      {/* Display truncated title */}
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
                      // Display cover image if available
                      <CardMedia
                        component="img"
                        alt="Bild vorhanden"
                        image={book.cover}
                      />
                    ) : (
                      // Display message if no cover image
                      <CardMedia
                      component="img"
                      alt="Kein Bild vorhanden"
                      image={noimage}
                    />
                    )}
                  </div>
                  <div className="publisher-price-container">
                    <div>
                        {/* Display book price */}
                      <Typography style={{ color: colorBlue }}>
                        {book.price}
                      </Typography>
                    </div>
                    <div>
                      {/* Render LikeButton component */}
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
