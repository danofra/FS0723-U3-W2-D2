import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const SingleBook = ({ book, selectedBook, changeSelectedBook }) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(selectedBook === book.asin);
  }, [selectedBook, book.asin]);

  return (
    <>
      <Card
        onClick={() => changeSelectedBook(book.asin)}
        style={{
          border: isSelected ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
