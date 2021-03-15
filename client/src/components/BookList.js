import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetail from "./BookDetail";

export default function BookList() {
  const [state, setstate] = useState({ selected: null });
  const { data, loading } = useQuery(getBooksQuery);

  const handleSelect = (bookId) => {
    setstate({
      selected: bookId,
    });
  };

  const renderBooks = (data) => {
    if (loading) {
      return <li>Loading...</li>;
    } else {
      return data.books.map((book, index) => (
        <li
          onClick={(e) => {
            handleSelect(book.id);
          }}
          key={book.id}
        >
          {book.name}
        </li>
      ));
    }
  };
  return (
    <div>
      <ul id="book-list">{renderBooks(data)}</ul>
      <div>
        <BookDetail bookId={state.selected} />
      </div>
    </div>
  );
}
