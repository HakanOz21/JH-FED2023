import { useState, useEffect, useContext } from "react";
import "../App.css";
import { Books } from "../models/BooksInterface";
import { getOneBook, deleteBook } from "../models/API";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { indigo, red } from "@mui/material/colors";
import { UserContext } from "../models/LoginContext";
import noimage from "../noimage.jpg";

const BookDetails = () => {
  const [book, setBook] = useState<Books | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const colorBlue = indigo[700];
  const colorRed = red[700];

  // Function to handle click on Edit button
  const handleEditClick = () => {
    setIsEditing(true);
    navigate(`/books/${book?.id}/edit?editing=true`);
  };

  // Function to navigate back to all books
  const moveToAllBooks = () => {
    navigate(`/`);
  };

  // Function to remove a book
  const removeBook = async () => {
    try {
      if (id) {
        await deleteBook(id);
        setBook(null);
        moveToAllBooks();
      } else {
        console.error("ID is undefined");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch book data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const oneBook = await getOneBook(id);
          setBook(oneBook);
        } else {
          console.error("ID is undefined");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  // JSX rendering
  return (
    <div className="book-details">
      <div className="card-container">
        <Card
          sx={{
            maxWidth: 400,
            maxHeight: 800,
            display: "inline-block",
            mx: "2px",
            borderRadius: 5,
          }}
        >
          <CardContent>
            {/*Check if book has cover image*/}
            {book?.cover ? (
              <div>
                <img src={book.cover} alt="Bild vorhanden" />
              </div>
            ) : (
              <div>
                <img src={noimage} alt="Kein Bild vorhanden" />
              </div>
            )}
            <div className="publisher-price-container">
              <Typography style={{ color: colorBlue }}>
                {book?.price}
              </Typography>
              <Typography>{book?.publisher}</Typography>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="details">
        <Typography variant="h3">{book?.title}</Typography>
        <Typography variant="h5">{book?.subtitle}</Typography>
        <Typography variant="h6" style={{ textDecoration: "underline" }}>
          Description
        </Typography>
        <Typography>{book?.abstract}</Typography>
        <div className="author-price-container">
          <Typography variant="body1" fontWeight="bold">
            {book?.author}
          </Typography>
          <Typography>p.{book?.numPages}</Typography>
          <Typography>ISBN: {book?.isbn}</Typography>
        </div>
        <div>
          {/* Button to edit the book */}
          {userContext.user && (
            <Button
              style={{
                maxWidth: "90px",
                color: colorBlue,
                borderColor: colorBlue,
                borderRadius: "15px",
              }}
              variant="outlined"
              onClick={handleEditClick}
            >
              Edit
            </Button>
          )}
          {/* Button to delete the book */}
          {userContext.user && (
            <Button
              style={{
                maxWidth: "90px",
                margin: "0 40px",
                color: colorRed,
                borderColor: colorRed,
                borderRadius: "15px",
              }}
              variant="outlined"
              onClick={removeBook}
            >
              Delete
            </Button>
          )}
          {/* Button to go back to all books */}
          <Button
            style={{
              maxWidth: "90px",
              color: colorBlue,
              borderColor: colorBlue,
              borderRadius: "15px",
            }}
            variant="outlined"
            onClick={moveToAllBooks}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
