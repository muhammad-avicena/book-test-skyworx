/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [lastId, setLastId] = useState(0);

  const addBook = (book) => {
    const newBook = { ...book, id: lastId + 1 };
    setBooks([...books, newBook]);
    setLastId(lastId + 1);
  };

  const editBook = (id, book) => {
    const updatedBooks = books.map((item) => {
      if (item.id === id) {
        return { ...item, ...book };
      }
      return item;
    });
    setBooks(updatedBooks);
  };

  const deleteBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  return (
    <BookContext.Provider value={{ books, addBook, editBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};
