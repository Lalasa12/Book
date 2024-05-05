import React, { useState } from 'react';
import Book from './Book';

function BookList() {
  const [books, setBooks] = useState([
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', isRead: false },
    { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isRead: true },
    { id: 3, title: '1984', author: 'George Orwell', isRead: false },
  ]);

  const toggleRead = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, isRead: !book.isRead } : book
      )
    );
  };

  const bookListStyle = {
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  };

  return (
    <div className="book-list" style={bookListStyle}>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          isRead={book.isRead}
          toggleRead={() => toggleRead(book.id)} // Define toggleRead function here
        />
      ))}
    </div>
  );
}

export default BookList;
