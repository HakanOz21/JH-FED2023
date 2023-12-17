import { useState, useEffect } from "react";
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

const BookDetails = () => {
  const [book, setBook] = useState<Books | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const colorBlue = indigo[700];
  const colorRed = red[700];

  const handleEditClick = () => {
    setIsEditing(true);
    navigate(`/books/${book?.id}/edit?editing=true`);
  };

  const moveToAllBooks = () => {
    navigate(`/`);
  };

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
            {book?.cover ? (
              <div>
                <img src={book.cover} alt="Bild vorhanden" />
              </div>
            ) : (
              <div>
                <p>Kein Bild vorhanden</p>
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
