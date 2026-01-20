import { useState, useEffect } from "react";
import BookCard from "./BookCard";
import booksData from "../Data/Books.json";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  return (
    <div className="book-grid">
      {books.map(book => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
}

export default BookList;