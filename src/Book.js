import React from 'react';

function Book({ title, author, isRead, toggleRead }) {
  const bookStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  };

  const buttonStyle = {
    backgroundColor: isRead ? 'green' : 'blue',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  };

  return (
    <div className="book" style={bookStyle}>
      <h2>{title}</h2>
      <p>By {author}</p>
      <button style={buttonStyle} onClick={toggleRead}>
        {isRead ? 'Mark as Unread' : 'Mark as Read'}
      </button>
    </div>
  );
}

export default Book;
