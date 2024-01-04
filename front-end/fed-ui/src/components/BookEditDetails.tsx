import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateBook, getOneBook } from "../models/API";
import { Books } from "../models/BooksInterface";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { indigo } from "@mui/material/colors";
import { StyledInput, Label } from "./formStyle";
import { Textarea } from "@nextui-org/react";

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
            isbn: oneBook.isbn,
            abstract: oneBook.abstract,
            author: oneBook.author,
            price: oneBook.price,
            cover: oneBook.cover,
            publisher: oneBook.publisher,
            numPages: oneBook.numPages,
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

  // Function to handle input changes in the form
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  // Function to navigate to the details page of the book
  const moveToDetailsPage = () => {
    navigate(`/books/${id}`);
  };

  // Function to handle form submission
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

    // JSX rendering
  return (
    <div className="editingPage">
      {isEditing && (
        <form onSubmit={handleFormSubmit}>
           {/* Input fields and their labels */}
          <div style={{ marginBottom: "5px" }}>
            <Label>Title:</Label>
            <StyledInput
              type="text"
              name="title"
              value={editedBook.title || ""}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ marginBottom: "5px" }}>
            <Label>Subtitle:</Label>
            <StyledInput
              type="text"
              name="subtitle"
              value={editedBook.subtitle || ""}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ marginBottom: "5px" }}>
            <Label>ISBN:*</Label>
            <StyledInput
              type="text"
              name="isbn"
              value={editedBook.isbn || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <div style={{ marginBottom: "5px" }}>
            <Label>Abstract:</Label>
            <StyledInput
              type="text"
              name="abstract"
              value={editedBook.abstract || ""}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ marginBottom: "5px" }}>
            <Label>Author:</Label>
            <StyledInput
              type="text"
              name="author"
              value={editedBook.author || ""}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ marginBottom: "5px" }}>
            <Label>Publisher:</Label>
            <StyledInput
              type="text"
              name="publisher"
              value={editedBook.publisher || ""}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ marginBottom: "5px" }}>
            <Label>Price:</Label>
            <StyledInput
              type="text"
              name="price"
              value={editedBook.price || ""}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ marginBottom: "5px" }}>
            <Label>Number of Pages:</Label>
            <StyledInput
              type="number"
              name="numPages"
              value={editedBook.numPages}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <Label>Cover URL:</Label>
            <StyledInput
              type="text"
              name="cover"
              value={editedBook.cover || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            {/* Button to save the changes */}
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
             {/* Button to navigate back to the details page */}
            <Button
              style={{
                maxWidth: "90px",
                marginLeft: "140px",
                color: colorBlue,
                borderColor: colorBlue,
                borderRadius: "15px",
              }}
              variant="outlined"
              onClick={moveToDetailsPage}
            >
              Back
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default BookEditDetails;
