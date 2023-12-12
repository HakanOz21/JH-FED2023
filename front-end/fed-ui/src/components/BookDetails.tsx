import { useState, useEffect } from "react";
import "../App.css";
import { Books } from "../models/BooksInterface";
import { getOneBook } from "../models/API";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BookDetails = () => {
  const [book, setBook] = useState<Books | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

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
      <div>
        {book?.cover ? (
          <div>
            <img src={book.cover} alt="Bild vorhanden" />
          </div>
        ) : (
          <div>
            <p>Kein Bild vorhanden</p>
          </div>
        )}
      </div>
      <div className="details">
        <h2 className="book">{book?.title}</h2>
        <h2>Description</h2>
        <p>{book?.abstract}</p>
        <h2>{book?.author}</h2>
      </div>
      <button onClick={() => navigate(`/books/${book?.id}/edit`)}>Edit</button>
    </div>
  );
};

export default BookDetails;
