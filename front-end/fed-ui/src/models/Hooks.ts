import { useState, useEffect } from "react";
import { getAllBooks } from "../models/API";
import { Books } from "../models/BooksInterface";

type FetchState = "initial" | "loading" | "success" | "error";

const useBooks = () => {
  const [books, setBooks] = useState<Books[]>([]);
  const [state, setState] = useState<FetchState>("initial");
  const [error, setError] = useState<Error | null>();

  const fetchData = async () => {
    setState("loading");
    try {
      const booksData = await getAllBooks();
      setBooks(booksData);
      setState("success");
    } catch (error: any) {
      setError(error);
      setState("error");
    }
  };

  const refresh = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return { books, state, error, refresh };
};

export default useBooks;
