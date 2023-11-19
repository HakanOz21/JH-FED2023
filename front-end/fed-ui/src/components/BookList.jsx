import React from "react";
import { useState, useEffect } from "react";
import '../App.css';
import './LikeButton';
import { getAllBooks } from "../API";
import LikeButton from "./LikeButton";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const booksData = await getAllBooks();
                setBooks(booksData);
            }catch (error) {
                console.log(error);
            }
        };
        fetchData();
    },[])


    return (
        <div className='book-list'>
            {books.map((book)=> (
                <div key={book.id} className="book">
                    <div><h3>{book.title}</h3></div>
                    <div><img src={book.cover} alt="Kein Bild Vorhanden"/></div>
                    <div><LikeButton/></div>
                </div>
            ))}
        </div>
    )
}

export default BookList