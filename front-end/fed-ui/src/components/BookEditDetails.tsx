import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateBook, getOneBook } from "../models/API";
import { Books } from "../models/BooksInterface";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { indigo } from "@mui/material/colors";

const BookEditDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Books | null>(null);
  const [editedBook, setEditedBook] = useState<Partial<Books>>({});
  const navigate = useNavigate();
  const isEditing =
    new URLSearchParams(window.location.search).get("editing") === "true";
  const colorBlue = indigo[700];

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const oneBook = await getOneBook(id);
          setBook(oneBook);
          setEditedBook({
            title: oneBook.title,
            subtitle: oneBook.subtitle,
          });
        } else {
          console.error("ID is undefined");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const moveToDetailsPage = () => {
    navigate(`/books/${id}`);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      try {
        const updatedData = {
          ...book,
          ...editedBook,
        };

        const updatedBook = await updateBook(id, updatedData);
        setBook(updatedBook);
        moveToDetailsPage();
      } catch (error) {
        console.error("Fehler beim Aktualisieren der Buchdetails:", error);
      }
    }
  };

  return (
    <div className="editingPage">
      {isEditing ? (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={editedBook.title || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Subtitle:</label>
            <input
              type="text"
              name="subtitle"
              value={editedBook.subtitle || ""}
              onChange={handleInputChange}
            />
          </div>
          <Button
            style={{
              maxWidth: "90px",
              color: colorBlue,
              borderColor: colorBlue,
              borderRadius: "15px",
            }}
            variant="outlined"
            type="submit"
          >
            Save
          </Button>
          <Button
            style={{
              maxWidth: "90px",
              color: colorBlue,
              borderColor: colorBlue,
              borderRadius: "15px",
            }}
            variant="outlined"
            onClick={moveToDetailsPage}
          >
            Back
          </Button>
        </form>
      ) : (
        <div>
          <h2>{book?.title}</h2>
          <p>{book?.subtitle}</p>
        </div>
      )}
    </div>
  );
};

export default BookEditDetails;
