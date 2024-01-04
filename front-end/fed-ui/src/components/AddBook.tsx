import React, { useState } from "react";
import { createBook } from "../models/API";
import { Books } from "../models/BooksInterface";
import { indigo } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { StyledInput, Label } from "./formStyle";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();
  const colorBlue = indigo[700];

  // Function to navigate to the main page
  const moveToAllBooks = () => {
    navigate(`/`);
  };

  // Function to navigate to the details page of a book
  const moveToDetailsPage = (bookId: string) => {
    navigate(`/books/${bookId}`);
  };

  const [formData, setFormData] = useState<Books>({
    id: "",
    title: "",
    subtitle: "",
    isbn: "",
    abstract: "",
    author: "",
    publisher: "",
    price: "$0.00",
    numPages: 0,
    cover: "",
  });

  // Function to handle input changes in the form
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      id: formData.isbn,
    }));
  };

  // Function to handle form submission
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createBook(formData);
      setFormData({
        id: "",
        title: "",
        subtitle: "",
        isbn: "",
        abstract: "",
        author: "",
        publisher: "",
        price: "$0.00",
        numPages: 0,
        cover: "",
      });
      moveToDetailsPage(formData.id);
    } catch (error) {
      console.error("Fehler beim Hinzufügen des Buchs:", error);
    }
  };

  // JSX rendering
  return (
    <form className="addBookPage" onSubmit={handleFormSubmit}>
      <div style={{ marginBottom: "5px" }}>
        <Label>Title:*</Label>
        <StyledInput
          type="text"
          value={formData.title}
          placeholder="Title"
          onChange={handleInputChange}
          name="title"
          required
        />
      </div>
      <div style={{ marginBottom: "5px" }}>
        <Label>Subtitle:</Label>
        <StyledInput
          type="text"
          value={formData.subtitle}
          placeholder="subtitle"
          onChange={handleInputChange}
          name="subtitle"
        />
      </div>
      <div style={{ marginBottom: "5px" }}>
        <Label>ISBN:*</Label>
        <StyledInput
          type="text"
          value={formData.isbn}
          placeholder="isbn"
          onChange={handleInputChange}
          name="isbn"
          required
        />
      </div>
      <div style={{ marginBottom: "5px" }}>
        <Label>Abstract:</Label>
        <StyledInput
          placeholder="abstract"
          value={formData.abstract}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleInputChange(e)
          }
          name="abstract"
        />
      </div>
      <div style={{ marginBottom: "5px" }}>
        <Label>Author:</Label>
        <StyledInput
          type="text"
          value={formData.author}
          placeholder="author"
          onChange={handleInputChange}
          name="author"
        />
      </div>
      <div style={{ marginBottom: "5px" }}>
        <Label>Publisher:</Label>
        <StyledInput
          type="text"
          value={formData.publisher}
          placeholder="publisher"
          onChange={handleInputChange}
          name="publisher"
        />
      </div>
      <div style={{ marginBottom: "5px" }}>
        <Label>Price:</Label>
        <StyledInput
          type="text"
          value={formData.price}
          placeholder="price"
          onChange={handleInputChange}
          name="price"
        />
      </div>
      <div style={{ marginBottom: "5px" }}>
        <Label>Number of Pages:</Label>
        <StyledInput
          type="number"
          value={formData.numPages}
          placeholder="numPages"
          onChange={handleInputChange}
          name="numPages"
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <Label>Cover URL:</Label>
        <StyledInput
          type="text"
          value={formData.cover}
          placeholder="cover"
          onChange={handleInputChange}
          name="cover"
        />
      </div>
      <div>
        {/* Button to add the book */}
        <Button
          style={{
            maxWidth: "110px",
            color: colorBlue,
            borderColor: colorBlue,
            borderRadius: "15px",
          }}
          variant="outlined"
          type="submit"
        >
          Add Book
        </Button>
        {/* Button to navigate back to the main page */}
        <Button
          style={{
            maxWidth: "90px",
            marginLeft: "120px",
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
    </form>
  );
};

export default AddBook;
