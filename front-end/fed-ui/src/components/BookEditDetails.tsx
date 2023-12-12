import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateBook, getOneBook } from "../models/API";
import { Books } from "../models/BooksInterface";

const BookEditDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Books | null>(null);
  const [editedBook, setEditedBook] = useState<Partial<Books>>({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const fetchedBook = await getOneBook(id);
          setBook(fetchedBook);
          setEditedBook({
            title: fetchedBook.title,
            subtitle: fetchedBook.subtitle,
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

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      try {
        // Aktualisierte Daten unter Verwendung aller vorhandenen Buchdetails
        const updatedDataWithISBN = {
          ...book,
          ...editedBook,
          isbn: id,
        };

        const updatedBook = await updateBook(id, updatedDataWithISBN);
        setBook(updatedBook);
        setIsEditing(false); // Wechsel zurück in den Anzeigemodus
      } catch (error) {
        console.error("Fehler beim Aktualisieren der Buchdetails:", error);
      }
    }
  };

  return (
    <div>
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
          {/* Add other form fields as needed */}
          <button type="submit">Save Changes</button>
        </form>
      ) : (
        <div>
          <h2>{book?.title}</h2>
          <p>{book?.subtitle}</p>
          {/* Display other book details in view mode */}
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default BookEditDetails;
