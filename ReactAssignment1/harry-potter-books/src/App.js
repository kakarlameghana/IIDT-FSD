import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const searchQuery = 'Harry Potter';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
        );
        setBooks(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div className="book-list">
      {books.map((book, index) => (
        <div key={book.id} className={`book-item ${index < 10 ? 'row-1' : 'row-2'}`}>
          <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          <div className="book-info">
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;